import React, { useEffect, useState } from "react";
import getCountry from "../api/api";
import Card from "./Card";
import { Country } from "../types/country";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      const data: Country[] = await getCountry();
      setCountries(data);
    };
    fetchData();
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: Country) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter(
          (selectedCountry: Country) =>
            selectedCountry.name.common !== country.name.common
        )
      );
    }
  };
  console.log(selectedCountries);
  return (
    <div className="m-auto mt-5">
      <div
        onClick={() => {
          handleSelectCountry;
        }}
      >
        <h2 className="text-3xl py-5 text-center">Favorite Countries</h2>
        <div className="grid grid-rows-4 grid-cols-4 m-auto">
          {selectedCountries.map((country: Country) => {
            return (
              <Card
                country={country}
                key={country.name.common}
                handleSelectCountry={handleSelectCountry}
              />
            );
          })}
        </div>
      </div>
      <div
        onClick={() => {
          handleSelectCountry;
        }}
      >
        <h2 className="text-3xl py-5 text-center">Countries</h2>
        <div className="grid grid-rows-4 grid-cols-4 m-auto">
          {countries.map((country: Country) => {
            return (
              <Card
                country={country}
                key={country.name.common}
                handleSelectCountry={handleSelectCountry}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CountryList;
