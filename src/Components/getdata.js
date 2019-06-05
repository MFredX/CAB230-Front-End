import { useState, useEffect } from "react";
//This document will creat Get() operations and Use() operations for all parameters relevant
// to the search filter

//Function to get offences
function GetOffences() {
  return fetch("https://cab230.hackhouse.sh/offences")
    .then(res => res.json())
    .then(res => res.offences);
}

//Function to use offences
export function UseOffences() {
  const [offencesloading, setOffencesLoading] = useState(true);
  const [offences, setOffences] = useState([]);
  const [offencesError, setOffencesError] = useState(null);

  useEffect(() => {
    GetOffences()
      .then(Offences => {
        setOffences(Offences);
        setOffencesLoading(false);
      })
      .catch(e => {
        setOffencesError(e);
        setOffencesLoading(false);
      });
  }, []);

  return {
    offencesloading,
    offences,
    offencesError
  };
}

//Function to get areas
function GetAreas() {
  return fetch("https://cab230.hackhouse.sh/areas")
    .then(res => res.json())
    .then(res => res.areas);
}

//Function to use areas
export function UseAreas() {
  const [areasloading, setAreasLoading] = useState(true);
  const [areas, setAreas] = useState([]);
  const [areasError, setAreasError] = useState(null);

  useEffect(() => {
    GetAreas()
      .then(areas => {
        setAreas(areas);
        setAreasLoading(false);
      })
      .catch(e => {
        setAreasError(e);
        setAreasLoading(false);
      });
  }, []);

  return {
    areasloading,
    areas,
    areasError
  };
}

//Function to get ages
function GetAges() {
  return fetch("https://cab230.hackhouse.sh/ages")
    .then(res => res.json())
    .then(res => res.ages);
}
//Function to use ages
export function UseAges() {
  const [Agesloading, setAgesLoading] = useState(true);
  const [Ages, setAges] = useState([]);
  const [AgesError, setAgesError] = useState(null);

  useEffect(() => {
    GetAges()
      .then(Ages => {
        setAges(Ages);
        setAgesLoading(false);
      })
      .catch(e => {
        setAgesError(e);
        setAgesLoading(false);
      });
  }, []);

  return {
    Agesloading,
    Ages,
    AgesError
  };
}

//Function to get genders
function GetGenders() {
  return fetch("https://cab230.hackhouse.sh/genders")
    .then(res => res.json())
    .then(res => res.genders);
}

//Function to use genders
export function UseGenders() {
  const [Gendersloading, setGendersLoading] = useState(true);
  const [Genders, setGenders] = useState([]);
  const [GendersError, setGendersError] = useState(null);

  useEffect(() => {
    GetGenders()
      .then(Genders => {
        setGenders(Genders);
        setGendersLoading(false);
      })
      .catch(e => {
        setGendersError(e);
        setGendersLoading(false);
      });
  }, []);

  return {
    Gendersloading,
    Genders,
    GendersError
  };
}

//Function to get years
function GetYears() {
  return fetch("https://cab230.hackhouse.sh/years")
    .then(res => res.json())
    .then(res => res.years);
}

//Function to use years
export function UseYears() {
  const [Yearsloading, setYearsLoading] = useState(true);
  const [Years, setYears] = useState([]);
  const [YearsError, setYearsError] = useState(null);

  useEffect(() => {
    GetYears()
      .then(Years => {
        setYears(Years);
        setYearsLoading(false);
      })
      .catch(e => {
        setYearsError(e);
        setYearsLoading(false);
      });
  }, []);

  return {
    Yearsloading,
    Years,
    YearsError
  };
}

//Function to get Query Results
function Search(offence, areas, ages, genders, years) {
  // Format saerch parameters.
  let filter = "";

  if (areas !== null) {
    filter = `area=${areas.toString()}`;
  }
  if (ages !== null) {
    if (filter === "") {
      filter = `age=${ages.toString()}`;
    } else {
      filter += `&age=${ages.toString()}`;
    }
  }
  if (genders !== null) {
    if (filter === "") {
      filter = `gender=${genders.toString()}`;
    } else {
      filter += `&gender=${genders.toString()}`;
    }
  }
  if (years !== null) {
    if (filter === "") {
      filter = `year=${years.toString()}`;
    } else {
      filter += `&year=${years.toString()}`;
    }
  }

  //The parameters of the call
  let getParam = { method: "GET" };
  let head = { Authorization: `Bearer ${window.JWT}` };
  getParam.headers = head;

  //The URL
  const baseUrl = "https://cab230.hackhouse.sh/search?";
  const query = `offence=${offence}`;
  let url = "";

  // Check if there are any filters.
  if (filter === "") {
    url = baseUrl + query;
  } else {
    url = baseUrl + query + "&" + filter;
  }

  return fetch(encodeURI(url), getParam)
    .then(response => response.json())
    .then(response => response.result);
}

// Function to hook to the results from Search().
export function UseSearch(offence, areas, ages, genders, years) {
  const [resultLoading, setResultLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [resultError, setResultError] = useState(null);

  useEffect(() => {
    Search(offence, areas, ages, genders, years)
      .then(results => {
        setResults(results);
        setResultLoading(false);
      })
      .catch(error => {
        setResultError(error);
        setResultLoading(false);
      });
  }, [offence, areas, ages, genders, years]);

  return {
    resultLoading,
    results,
    resultError
  };
}
