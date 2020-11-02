import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

const RegisterComponent = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const nextURL = "localhost:3000";
  const nextTitle = "Home";
  const nextState = { additionalInformation: "Updated the URL with JS" };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === passwordConfirm) {
      console.log("fetching...");
      fetch("https://ajaaspaceserver.herokuapp.com/test/register", {
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
          props.updateSessionToken(json.sessionToken);
          // window.location.href = "http://localhost:3000"; //! WOULD LIKE TO CHANGE
          // window.history.replaceState(nextState, nextTitle, nextURL); //! STILL NOT A WORKING SOLUTION
        });

      props.updateSessionToken("HeyMan");
    } else {
      alert("Passwords must match!");
    }
  };

  return (
    <>
      <div className="form-background"></div>
      <Form onSubmit={handleSubmit}>
        <h2>Register</h2>
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
        <FormGroup>
          <Label htmlFor="passwordConfirm">Confirm Password</Label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </FormGroup>
        {/* <Link to="/"> */}
        <button type="submit">Register</button>
        {/* </Link> */}
      </Form>
    </>
  );
};

export default RegisterComponent;
