import React from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import { SearchBar } from "./searchbar.js";
import { useQR } from "./searchapi";
import Table from "react-bootstrap/Table";
import OffenseListSearch from "./offencedropdown.js";
import "../styles.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export function SearchPage() {
  const [search, setSearch] = useState("");
  const { loading, Qdata, error } = useQR(search);

  function createTable() {
    return (
      <Table class="sortable" striped bordered hover>
        <thead>
          <tr>
            <th>LGA</th>
            <th>Latitude</th>
            <th>Longtitude</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {Qdata.map((data, index) => (
            <tr key={index}>
              <td>{data.LGA}</td>
              <td>{data.lat}</td>
              <td>{data.lng}</td>
              <td>{data.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  return (
    <div>
      <h1>Enter details to conduct search</h1>
      <SearchBar onSubmit={setSearch} />
      <div>{Qdata != "" && createTable()}</div>
    </div>
  );
}
