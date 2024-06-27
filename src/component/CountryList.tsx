import { useEffect, useState } from "react";
import getCountry from "../api/api";
import Card from "./Card";

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      const data = await getCountry();
      setCountries(data);
    };
    fetchData();
  }, []);
  console.log(countries);

  return (
    <div className="m-auto mt-5">
      <h2 className="text-3xl py-5 text-center">Favorite Countries</h2>
      <div></div>
      <h2 className="text-3xl py-5 text-center">Countries</h2>
      <Card
        countries={countries}
        selectedCountries={selectedCountries}
        setSelectedCountries={setSelectedCountries}
      />
    </div>
  );
}

export default CountryList;
