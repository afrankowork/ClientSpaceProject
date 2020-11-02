import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

const RegisterComponent = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");

  const nextURL = "localhost:3000";
  const nextTitle = "Home";
  const nextState = { additionalInformation: "Updated the URL with JS" };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 5 || password != passwordConfirm) {
      if (password.length < 5) {
        setPasswordMessage("password must be at least 5 characters long");
      } else {
        setPasswordMessage("");
      }

      if (password != passwordConfirm) {
        setPasswordConfirmMessage("password values must match");
      } else {
        setPasswordConfirmMessage("");
      }

      return;
    }

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
          />
        </FormGroup>
        {passwordMessage ? (
          <p className="reg-error">{passwordMessage}</p>
        ) : null}
        <FormGroup>
          <Label htmlFor="passwordConfirm">Confirm Password</Label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </FormGroup>
        {passwordConfirmMessage ? (
          <p className="reg-error">{passwordConfirmMessage}</p>
        ) : null}
        {/* <Link to="/"> */}
        <button type="submit">Register</button>
        {/* </Link> */}
      </Form>
    </>
  );
};

export default RegisterComponent;
