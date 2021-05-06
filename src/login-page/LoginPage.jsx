import React, { useState } from "react";
import LoginForm from "./LoginForm";
import logo from "./logo3.png";
import axios from "axios"

function LoginPage() {
  const beURL = "https://polysnaps-be.herokuapp.com";
  const feURL = "https://polysnaps-fe.herokuapp.com";
  
  const adminUser = {
    email: "admin@calpoly.edu",
    password: "admin123"
  };

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    console.log("Loggged in");
    console.log(details.email);
    console.log(details.password);
    axios
      .post(beURL + "/users", details)
      .then(function (response) {
        window.location.href = feURL + "/ProfileForm";
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // setUser({
    //   email: details.email
    // });
  };

  const Logout = () => {
    console.log("Logout");
    setUser({
      email: ""
    });
  };

  return (
    <div className="container">
      <img src={logo} alt="PolySnaps Logo" />
      {user.email !== "" ? (
        <div className="welcome">
          <h2>Welcome to PolySnaps!</h2>
          <button onClick={Logout}> Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default LoginPage;