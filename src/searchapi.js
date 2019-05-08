import { useState } from "react";
import { useEffect } from "react";
// import {window.JWT} from "./form.js";


function getResult(search) {
    
  let getParam = { method: "GET" };
  let head = { Authorization: `Bearer ${window.JWT}` };
  getParam.headers = head;
  console.log(JSON.stringify("window.JWT in Search is:",window.JWT));
  //The URL
  const baseUrl = "https://cab230.hackhouse.sh/search?";
  const query = 'offence=Armed Robbery';
  const url = baseUrl + query;

  return fetch(encodeURI(url),getParam)
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


export function useNewsArticles(search) {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    getResult(search)
      .then(headlines => {
        setHeadlines(headlines);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  }, [search]);

  return {
    loading,
    headlines,
    error
  };
}
