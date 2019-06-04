import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function OffenseListSearch(props) {
  const [offenseList, setOffenseList] = useState([]);
  const [innerSearch, setInnerSearch] = useState("");
  var initialOffence = [];

  fetch("https://cab230.hackhouse.sh/offences")
    .then(res => res.json())
    .then(res => res.offences)
    .then(data => {
      initialOffence = data.map(offence => {
        return offence;
      });
      setOffenseList(initialOffence);
    });

  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="List of Offences">
        {offenseList.map((offence, index) => (
          <Dropdown.Item
            key={index}
            href=""
            value={innerSearch}
            onClick={e => setInnerSearch(e.target.value)}
            //onClick={() => props.onSubmit(innerSearch)}
          >
            {offence}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}
