import React from "react";
import { Link } from "react-router-dom";
import { UseSearch } from "./getdata";
import { useState } from "react";
import {
  GetInnerOffence,
  GetInnerAreas,
  GetInnerAges,
  GetInnerGenders,
  GetInnerYears
} from "./searchpage";
import SmartDataTable from "react-smart-data-table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export function DisplayResult() {
  const [gData, setgData] = useState({});
  const { resultLoading, results, resultError } = UseSearch(
    GetInnerOffence(),
    GetInnerAreas(),
    GetInnerAges(),
    GetInnerGenders(),
    GetInnerYears()
  );

  const data = results.map(result => ({
    LocalGovernmentArea: result.LGA,
    TotalOffences: result.total,
    Latitude: result.lat,
    Longitude: result.lng
  }));

  //Making an array of data to be plotted
  const graphData = results.map(result => ({
    LocalGovernmentArea: result.LGA,
    TotalOffences: result.total
  }));

  const MapData = results.map(result => ({
    Latitude: result.lat,
    Longitude: result.lng
  }));

  console.log(graphData);

  function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      if (arr[i] !== undefined) rv[i] = arr[i];
    return rv;
  }
  //var graphObject = {};
  //let graphObject = toObject(graphData);

  return (
    <div>
      <SmartDataTable data={data} name="Test" sortable />
      <br />
      <BarChart
        width={1000}
        height={300}
        data={graphData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="LocalGovernmentArea" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        {/* <Bar type="monotone" dataKey="uv" fill="#8884d8" barSize={30} /> */}
        <Bar dataKey="TotalOffences" fill="#8884d8" />
      </BarChart>
    </div>
  );
}
