const Car = (props) => {
  const { car, onAdd } = props;

  return (
    <div>
      <img className="small" src={car.image} alt={car.name}></img>
      <h3>{car.name}</h3>
      <div className="price">${car.price}</div>
      <div>
        <button onClick={() => onAdd(car)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Car;
