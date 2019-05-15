import { useState } from "react";
import { useEffect } from "react";

function getQR(search) {
  let getParam = { method: "GET" };
  let head = { Authorization: `Bearer ${window.JWT}` };
  getParam.headers = head;

  //The URL
  const baseUrl = "https://cab230.hackhouse.sh/search?";
  const query = "offence=" + search;
  const url = baseUrl + query;

  return fetch(encodeURI(url), getParam)
    .then(res => res.json())
    .then(res => res.result) //Get result
    .then(results =>
      results.map(result => ({
        LGA: result.LGA,
        total: result.total,
        lat: result.lat,
        lng: result.lng
      }))
    );
}

export function useQR(search) {
  const [loading, setLoading] = useState(true);
  const [Qdata, setQdata] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getQR(search)
      .then(Qdata => {
        setQdata(Qdata);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  }, [search]);

  return {
    loading,
    Qdata,
    error
  };
}
