import { useEffect, useState } from "react";
import getCountry from "../api/api";

function CountryList() {
  const [countries, setCountries] = useState([]);
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
      <h2 className="text-3xl py-5 text-center">Countries</h2>
      <div className="grid grid-rows-4 grid-cols-4 m-auto">
        {countries.map((country) => {
          return (
            <div className="w-82 h-52 border-2 border-black p-4 m-8 cursor-pointer">
              <img
                src={country.flags.png}
                alt={country.flags.alt}
                className="mx-auto w-40 h-24"
              />
              <h4 className="text-xl pt-4 pb-2">{country.name.common}</h4>
              <p>{country.capital}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountryList;
