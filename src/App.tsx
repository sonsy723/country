// import { useState } from "react";
import "./App.css";
import CountryList from "./component/CountryList";
import FavCountries from "./component/FavCountries";

function App() {
  return (
    <>
      <FavCountries />
      <CountryList />
    </>
  );
}

export default App;
