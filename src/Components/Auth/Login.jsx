import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import APIURL from "../../helpers/environment";

const LoginComponent = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    //let url = "https://ajaaspaceserver.herokuapp.com/test/logiin
    fetch(`${APIURL}/test/login`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.sessionToken === undefined) {
          console.log(json.sessionToken);
          alert("Wrong password!");
        } else {
          console.log(json.sessionToken);
          props.updateSessionToken(json.sessionToken);
        }
      })
      .catch((error) => {
        console.log("ERROR:", error);
        alert("ght is jwx!");
      });
  };

  return (
    <>
      <div className="form-background">
        <h1
          style={{
            display: isLoading ? "block" : "none",
            position: "relative",
            width: "fit-content",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -50%)",
            zIndex: "5",
            color: "white",
          }}
        >
          Loading...
        </h1>
      </div>
      <Form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="off"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>

        <button type="submit">Login</button>
      </Form>
    </>
  );
};

export default LoginComponent;
