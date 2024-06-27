function Card(props) {
  const onClickHandler = (e) => {
    props.setSelectedCountries(e.target.value);
    console.log(props.selectedCountries);
  };

  return (
    <div className="grid grid-rows-4 grid-cols-4 m-auto">
      {props.countries.map((country) => {
        return (
          <div
            className="w-82 h-52 border-2 border-black p-4 m-8 cursor-pointer"
            onClick={onClickHandler}
          >
            <img src={country.flags.png} className="mx-auto w-40 h-24" />
            <h4 className="text-xl pt-4 pb-2">{country.name.common}</h4>
            <p>{country.capital}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
