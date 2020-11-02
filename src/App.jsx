import "./App.css";
import { useEffect, useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import NavbarComponent from "./Components/Navbar";
import LoginComponent from "./Components/Auth/Login";
import RegisterComponent from "./Components/Auth/Register";
import AstroComponent from "./Components/Astro/Astro";
import NasaPhoto from "./Components/Astro/NasaPhoto";

function App() {
  const [token, setToken] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [view, setView] = useState("home");

  const changeView = (newView) => {
    setView(newView);
  };

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const getSessionToken = () => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") != undefined
    ) {
      setToken(localStorage.getItem("token"));
    } else {
      console.log("no session token");
    }
  };

  const updateSessionToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const deleteSessionToken = () => {
    localStorage.clear();
    setToken(null);
    console.log("token deleted");
  };

  useEffect(getSessionToken, []);

  return (
    <div className="App">
      <NavbarComponent
        isLogin={isLogin}
        toggleLogin={toggleLogin}
        token={token}
        deleteSessionToken={deleteSessionToken}
      />
      {token ? (
        view === "home" ? (
          <AstroComponent changeView={changeView} />
        ) : view === "nasa-photo" ? (
          <NasaPhoto changeView={changeView} />
        ) : (
          <h1>INVALID VIEW</h1>
        )
      ) : isLogin ? (
        <LoginComponent updateSessionToken={updateSessionToken} />
      ) : (
        <RegisterComponent updateSessionToken={updateSessionToken} />
      )}
    </div>
  );
}

export default App;

{
  /* <Router>
<NavbarComponent
  isLogin={isLogin}
  toggleLogin={toggleLogin}
  token={token}
  deleteSessionToken={deleteSessionToken}
/>
{isLogin ? (
  <LoginComponent updateSessionToken={updateSessionToken} />
) : (
  <RegisterComponent updateSessionToken={updateSessionToken} />
)}

<Switch>
  <Route exact path="/login">
    <LoginComponent updateSessionToken={updateSessionToken} />
  </Route>
  <Route exact path="/register">
    <RegisterComponent updateSessionToken={updateSessionToken} />
  </Route>
  <Route exact path="/">
    {token ? (
      <AstroComponent />
    ) : (
      <LoginComponent updateSessionToken={updateSessionToken} />
    )}
  </Route>
</Switch> 
</Router>*/
}
