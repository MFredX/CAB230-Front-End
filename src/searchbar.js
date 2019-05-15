import React from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");
  return (
    <div>
      <input
        aria-labelledby="search-button"
        name="search"
        id="search"
        type="search"
        value={innerSearch}
        onChange={e => setInnerSearch(e.target.value)}
      />

      <Button
        id="search-button"
        type="button"
        color="warning"
        onClick={() => props.onSubmit(innerSearch)}
      >
        Search
      </Button>
    </div>
  );
}
