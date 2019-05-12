import React from 'react';
import { useState } from "react";
import {Button} from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

window.JWT="";


function register(email,password){
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
            console.log(JSON.stringify(result));
        })
        
        .catch(function(error) {
            console.log("There has been a problem with your fetch operation: ",error.message);
        });
        
}


function login(email,password){
    const url = "https://cab230.hackhouse.sh/login";
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
            console.log(JSON.stringify(result));
            window.JWT=result.token
        }
        )        
        .catch(error => console.error("Error:", error));
        
}


function Search(search){
    let getParam = { method: "GET" };
    let head = { Authorization: `Bearer ${window.JWT}` };
    getParam.headers = head;

    //The URL
    const baseUrl = "https://cab230.hackhouse.sh/search?";
    const query = 'offence='+search;
    const url = baseUrl + query;

    fetch(encodeURI(url),getParam)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })

        .then(res=>res.result)//Getting results
        
        .then(function(result){
            // console.log(JSON.stringify(result[0].LGA))
            // result.map(console.log)
           
            
            const LGA=retrieveLGA(result)
            const total=retrievetotal(result)
            const lat=retrievelat(result)
            const lng=retrievelng(result) 
            const str=LGA+"<br>"+total+"<br>"+lat+"<br>"+lng
            let newDiv = document.getElementById("app");
            newDiv.innerHTML =JSON.stringify(str);
        })

        .catch(function(error) {
                console.log("There has been a problem with your fetch operation: ",error.message);
        });
}



function retrieveLGA(queryResult) {
    return (
        queryResult.map((single,index)=>(single.LGA)
    )
    )
}
function retrievetotal(queryResult) {
    return (
        queryResult.map((single,index)=>(single.total)
    )
    )
}
function retrievelat(queryResult) {
    return (
        queryResult.map((single,index)=>(single.lat)
    )
    )
}
function retrievelng(queryResult) {
    return (
        queryResult.map((single,index)=>(single.lng)
    )
    )
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
    const[search,setsearch]=useState("");

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
          onClick={() => Search(search)}
        >
        Search
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
        <label htmlFor="search">Your Search Parameters:</label>
        <input
            type="search"
            name="search"
            id="searchinput"
            value={search}
            placeholder="Search here"
            onChange={(event)=>setsearch(event.target.value)}
        />{' '}
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
    
