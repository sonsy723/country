import { Country } from "../types/country";

interface CardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
}

const Card: React.FC<CardProps> = ({ country, handleSelectCountry }) => {
  return (
    <div
      className="w-82 h-52 border-2 border-black p-4 m-8 cursor-pointer"
      onClick={() => {
        handleSelectCountry;
      }}
    >
      <img src={country.flags.png} className="mx-auto w-40 h-24" />
      <h4 className="text-xl pt-4 pb-2">{country.name.common}</h4>
      <p>{country.capital}</p>
    </div>
  );
};

export default Card;
