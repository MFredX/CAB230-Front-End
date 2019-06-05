import React from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import Table from "react-bootstrap/Table";
import { Link, Redirect } from "react-router-dom";
import "../styles.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../styles.css";

function register(email, password) {
  return fetch("https://cab230.hackhouse.sh/register", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        alert("Please recheck details");
        throw new Error("Network response was not ok");
      }
    })

    .then(function(result) {
      alert("Succesfullt registration!You may now vist the login page!");
    })

    .catch(function(error) {
      console.log(
        "There has been a problem with your fetch operation: ",
        error.message
      );
    });
}

export function RegisterPage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div>
      <h1>Welcome to the Crime Search App</h1>
      <h2>Register here</h2>;<label htmlFor="email">Your Email:</label>
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        placeholder="Enter your email here"
        onChange={event => setemail(event.target.value)}
      />
      <br />
      <label htmlFor="password">Your Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        placeholder="Enter your password here"
        onChange={event => setpassword(event.target.value)}
      />
      <Button
        color="primary"
        id="register"
        type="button"
        onClick={() => register(email, password)}
      >
        Register
      </Button>{" "}
    </div>
  );
}
