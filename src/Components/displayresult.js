import React from "react";
import { Link } from "react-router-dom";
import { UseSearch } from "./getdata";
import {
  GetInnerOffence,
  GetInnerAreas,
  GetInnerAges,
  GetInnerGenders,
  GetInnerYears
} from "./searchpage";
import SmartDataTable from "react-smart-data-table";

export function DisplayResult() {
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

  return (
    <div>
      <SmartDataTable data={data} name="Test" sortable />
    </div>
  );
}
