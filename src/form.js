import React from 'react';
import { useState } from "react";
import {Button} from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
            let appDiv = document.getElementById("app");
            appDiv.innerHTML = JSON.stringify(result);
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
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(function(result){
            let appDiv = document.getElementById("app");
            appDiv.innerHTML = JSON.stringify(result);
            // console.log(JSON.stringify(result));
            window.JWT=result.token
            // console.log(JSON.stringify(window.JWT))
        }
        )
        // .then(res =>console.log("Success:", JSON.stringify(res))
        
        .catch(error => console.error("Error:", error));
        
}


function ArmedRobberySearch(){
    let getParam = { method: "GET" };
    let head = { Authorization: `Bearer ${window.JWT}` };
    getParam.headers = head;

    //The URL
    const baseUrl = "https://cab230.hackhouse.sh/search?";
    const query = 'offence=Armed Robbery';
    const url = baseUrl + query;

    fetch(encodeURI(url),getParam)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(function(result) {
            let appDiv = document.getElementById("app");
            appDiv.innerHTML = JSON.stringify(result);
        })
        .catch(function(error) {
                console.log("There has been a problem with your fetch operation: ",error.message);
        });
}


function offences(){

    fetch("https://cab230.hackhouse.sh/offences")
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(function(result) {
            let appDiv = document.getElementById("app");
            appDiv.innerHTML = JSON.stringify(result);
        })
        .catch(function(error) {
            console.log("There has been a problem with your fetch operation: ",error.message);
        });
}

export function FormComp() { 
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    
    return (
        <div id="form">
        <form
        onSubmit={(event)=>{event.preventDefault()}}>

        <h1>Welcome to the portal!</h1>
        
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
        />{' '}

        <div id="menu buttons">
        <Button
            color="primary"
            id="register"
            type="button"
            onClick={() => register(email,password)}
        >
        Register
        </Button>{' '}

        <Button
          id="login"
          color="success"
          type="button"
          onClick={() => login(email,password)}
        >
        Login
        </Button>{' '}

        
        <Button
          id="search"
          color="warning"
          type="button"
          onClick={() => ArmedRobberySearch()}
        >
        Armed Robbery
        </Button>{' '}


        <Button
          id="offences"
          color="danger"
          type="button"
          onClick={() => offences()}
        >
        Offences
        </Button>{' '}
        
        </div>

        <div id="filter">
        <h2>Armed Robbery Offences - Filtered</h2>
        <Button color="info">Area</Button>{' '}
        <Button color="info">Age</Button>{' '}
        <Button color="info">Year</Button>{' '}
        </div>

        <br />
        {/* <button onClick={}>Login</button>
        <button onClick={}>Register</button> */}
        <br/>
        </form>
        </div>
        
    );

}
    
