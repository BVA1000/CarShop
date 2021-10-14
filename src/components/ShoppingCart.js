import React from "react";

const ShoppingCart = (props) => {
  const { cartProducts, onAdd, onRemove } = props;
  const carsPrice = cartProducts.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = carsPrice * 0.0725;
  const shippingPrice = carsPrice < 750000 ? 0 : 850;
  const totalPrice = carsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartProducts.length === 0 && <div>Cart Is Empty</div>}</div>
      {cartProducts.map((car) => (
        <div key={car.id} className="row">
          <div className="col-2 make">{car.make}</div>
          <div className="col-2">
            <button onClick={() => onAdd(car)} className="add">
              +
            </button>
            <button onClick={() => onRemove(car)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right price">
            {car.qty} X ${car.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartProducts.length !== 0 && (
        <>
          <hr></hr>
          <div className="checkout">
            <div className="row">
              <div className="col-2">Cars Price</div>
              <div className="col-1 text-right">{carsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">{shippingPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert("Implement Checkout")}>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </aside>
  );
};

export default ShoppingCart;
