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
  const [Offencesloading, setOffencesLoading] = useState(true);
  const [Offences, setOffences] = useState([]);
  const [OffencesError, setOffencesError] = useState(null);

  useEffect(() => {
    getQR(search)
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
    Offencesloading,
    Offences,
    OffencesError
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
  const [Areasloading, setAreasLoading] = useState(true);
  const [Areas, setAreas] = useState([]);
  const [AreasError, setAreasError] = useState(null);

  useEffect(() => {
    getQR(search)
      .then(Areas => {
        setAreas(Areas);
        setAreasLoading(false);
      })
      .catch(e => {
        setAreasError(e);
        setAreasLoading(false);
      });
  }, []);

  return {
    Areasloading,
    Areas,
    AreasError
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
    getQR(search)
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
    getQR(search)
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
    getQR(search)
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
