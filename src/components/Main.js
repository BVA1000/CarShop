import React from "react";
import Car from "./Car";

const Main = (props) => {
  const { cars, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Exotic Cars</h2>
      <div className="row">
        {cars.map((car) => (
          <Car key={car.id} car={car} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
};

export default Main;
