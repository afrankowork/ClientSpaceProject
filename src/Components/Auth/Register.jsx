import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

const RegisterComponent = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === passwordConfirm) {
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

        <Button type="submit">Register</Button>
      </Form>
    </>
  );
};

export default RegisterComponent;
