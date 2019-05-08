import React from 'react';
import { useState } from "react";

window.JWT="";


function register(email,password){
    
    console.log("Registering");
    // const url = "https://cab230.hackhouse.sh/register";
    // fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify( 
    //         {"email":email,
    //         "password":password}),
    //     headers:{
    //         "Content-Type":"application/json"
    //     }
        
    // })
    // .then(res => res.json())
    // .then(response => console.log("Success:", JSON.stringify(response)))
    // .catch(error => console.error("Error:", error));
    console.log({password})
    console.log({email})
    return fetch("https://cab230.hackhouse.sh/register", {
        method: "POST",
        body: JSON.stringify( 
            {"email":email,
            "password":password}),
        headers:{
            "Content-Type":"application/json"
        }
        })
        .then(function(response) {
            if (response.ok) {
            return response.json();
            }
            throw new Error("Network response was not ok");
        })
        
        .then(function(result) {
           // let appDiv = document.getElementById("app");
            console.log(JSON.stringify(result));
            // regButton.disabled = true;
        })
        
        .catch(function(error) {
            console.log("There has been a problem with your fetch operation: ",error.message);
        });
        
}


function login(email,password){
    console.log("Login");
    const url = "https://cab230.hackhouse.sh/login";
    // var window.JWT="";
    console.log({password})
    console.log({email})
    fetch(url, {
        method: "POST",   
        body: JSON.stringify( 
            {"email":email,
            "password":password}),
        headers:{
            "Content-Type":"application/json"
        }
        
    
    })
        .then(res => res.json())
        // .then(response => console.log("Success:", JSON.stringify(response)))
        .then(function(response){
            console.log(JSON.stringify(response));
            window.JWT=response.token
            console.log(JSON.stringify(window.JWT))
        }
        )
        // .then(res =>console.log("Success:", JSON.stringify(res))
        
        .catch(error => console.error("Error:", error));
        
}

export function FormComp() { 
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    
    return (
        <div id="form">
        <form
        onSubmit={(event)=>{event.preventDefault()}}>

        <h1>Hello {email}</h1>
        <label htmlFor="email">Your Email:</label>
        <input
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="Enter your email here"
            onChange={(event)=>setemail(event.target.value)}
        />
        <br />
        <label htmlFor="password">Your Password:</label>
        <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Enter your password here"
            onChange={(event)=>setpassword(event.target.value)}
        />

        <button
          id="register"
          type="button"
          onClick={() => register(email,password)}
        >
        Register
        </button>

        <button
          id="login"
          type="button"
          onClick={() => login(email,password)}
        >
        Login
        </button>

        <br />
        {/* <button onClick={}>Login</button>
        <button onClick={}>Register</button> */}
        <br/>
        </form>
        </div>
        
    );

}
    