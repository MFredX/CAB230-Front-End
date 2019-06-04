import React from "react";
import { Header } from "./header";
import { Main } from "./main";
import "../styles.css";

export function Fixed() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
