import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

const LoginComponent = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateSessionToken("HeyHeyMan");
  };

  return (
    <>
      <div className="form-background"></div>
      <Form onSubmit={handleSubmit}>
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
