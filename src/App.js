import React from "react";
import "./styles/global.css";
import Routes from "../src/routes";
import { BrowserRouter as Router } from "react-router-dom";


export default function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
}
