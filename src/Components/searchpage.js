import React from "react";
import { useState } from "react";
import { Button } from "reactstrap";
//import { useQR } from "./searchapi";
import Table from "react-bootstrap/Table";
import OffenseListSearch from "./offencedropdown.js";
import {
  UseYears,
  UseAreas,
  UseAges,
  UseGenders,
  UseOffences
} from "./getdata";
import Select from "react-select";
import "../styles.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
let innerOffence;
let innerAreas;
let innerAges;
let innerGenders;
let innerYears;

// Functions to return the search params.
export function GetInnerOffence() {
  return innerOffence;
}
export function GetInnerAreas() {
  return innerAreas;
}
export function GetInnerAges() {
  return innerAges;
}
export function GetInnerGenders() {
  return innerGenders;
}
export function GetInnerYears() {
  return innerYears;
}
export function SearchPage() {
  const [search, setSearch] = useState("");
  //const { loading, Qdata, error } = useQR(search);
  const { offencesLoading, offences, offencesError } = UseOffences();
  const { Areasloading, areas, AreasError } = UseAreas();
  const { Agesloading, Ages, AgesError } = UseAges();
  const { Gendersloading, Genders, GendersError } = UseGenders();
  const { Yearsloading, Years, YearsError } = UseYears();

  const [CompleteSearch, setCompleteSearched] = useState(false);

  //Decalring filters
  const [filterOffence, setFilterOffence] = useState(null);
  const [filterAreas, setFilterAreas] = useState(null);
  const [filterAges, setFilterAges] = useState(null);
  const [filterGenders, setFilterGenders] = useState(null);
  const [filterYears, setFilterYears] = useState(null);

  if (
    offencesLoading ||
    Areasloading ||
    Agesloading ||
    Gendersloading ||
    Yearsloading
  ) {
    return <p className="searchContainerNotifier">Loading...</p>;
  } else if (offencesError) {
    return (
      <p className="searchContainerNotifier">
        Something went wrong with Offences hook: {offencesError.message}
      </p>
    );
  } else if (AreasError) {
    return (
      <p className="searchContainerNotifier">
        Something went wrong with Areas hook: {AreasError.message}
      </p>
    );
  } else if (AgesError) {
    return (
      <p className="searchContainerNotifier">
        Something went wrong with Ages hook: {AgesError.message}
      </p>
    );
  } else if (GendersError) {
    return (
      <p className="searchContainerNotifier">
        Something went wrong with Genders hook: {GendersError.message}
      </p>
    );
  } else if (YearsError) {
    return (
      <p className="searchContainerNotifier">
        Something went wrong with Years hook: {YearsError.message}
      </p>
    );
  } else if (CompleteSearch) {
    //return <TableDraw/>;
    return <p>LADDDDSSSSS</p>;
  }
  //Mapping out variables to be accessed
  const offencesOptions = offences.map(offence => ({
    value: offence,
    label: offence
  }));
  const areasOptions = areas.map(area => ({
    value: area,
    label: area
  }));
  const agesOptions = Ages.map(age => ({
    value: age,
    label: age
  }));
  const gendersOptions = Genders.map(gender => ({
    value: gender,
    label: gender
  }));
  const yearsOptions = Years.map(year => ({
    value: year,
    label: year
  }));

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 5
    }),
    control: () => ({
      width: 500,
      height: 70,
      backgroundColor: "rgb(240, 237, 249)"
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    }
  };

  return (
    <div>
      <h1>
        <u>Enter details to conduct search</u>
      </h1>
      <br />
      <h3>Select Offence</h3>
      <Select
        id="offenceSelect"
        styles={customStyles}
        options={offencesOptions}
        placeholder="Click to select offence"
        onChange={offence => setFilterOffence(offence.label)}
      />
      <h3>Select Areas</h3>
      <Select
        id="areasSelect"
        styles={customStyles}
        options={areasOptions}
        placeholder="Click to select Area"
        isMulti
        onChange={areas => {
          const innerAreas = areas.map(age => age.label);
          setFilterAreas(innerAreas);
        }}
      />
      <h3>Select Ages</h3>
      <Select
        id="agesSelect"
        styles={customStyles}
        options={agesOptions}
        placeholder="Click to select Ages"
        isMulti
        onChange={ages => {
          const innerAges = ages.map(age => age.label);
          setFilterAges(innerAges);
        }}
      />
      <h3>Select Genders</h3>
      <Select
        id="gendersSelect"
        styles={customStyles}
        options={gendersOptions}
        placeholder="Click to select Genders"
        isMulti
        onChange={genders => {
          const innerGenders = genders.map(gender => gender.label);
          setFilterGenders(innerGenders);
        }}
      />
      <h3>Select Years</h3>
      <Select
        id="yearsSelect"
        styles={customStyles}
        options={yearsOptions}
        placeholder="Click to select Years"
        isMulti
        onChange={years => {
          const innerYears = years.map(year => year.label);
          setFilterYears(innerYears);
        }}
      />
      <br />
      <Button
        type="search"
        color="warning"
        onClick={() => {
          if (window.JWT === "") {
            alert(
              "You do not have access to this resource, please login or register"
            );
          } else if (!filterOffence) {
            alert("Data has not been entered");
          } else {
            innerOffence = filterOffence;
            innerAreas = filterAreas;
            innerAges = filterAges;
            innerGenders = filterGenders;
            innerYears = filterYears;
            setCompleteSearched(true);
            console.log(search);
          }
        }}
      >
        Search
      </Button>
    </div>
  );
}
