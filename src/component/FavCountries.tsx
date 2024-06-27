// import React from "react";

function FavCountries() {
  return (
    <div className="m-auto mt-5">
      <h2 className="text-3xl py-5 text-center">Favoraite Countries</h2>
      <div className="w-80 h-40 border-2 border-black p-4 m-8">
        <img src="../public/vite.svg" alt="#" className="m-auto" />
        <h4 className="text-xl py-2">나라 이름</h4>
        <p>수도 이름</p>
      </div>
      <hr />
    </div>
  );
}

export default FavCountries;
