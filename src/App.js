//import { Route, Switch } from "react-router-dom";
//import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import ShoppingCart from "./components/ShoppingCart";
import Data from "./Data";
import { useState } from "react";
//import React from "react";
//import Layout from "./components/layout/Layout";
//import CarShop from "./pages/CarShop";
//import ShoppingBag from "./pages/ShoppingBag";

const App = () => {
  const { cars } = Data;
  const [cartProducts, setCartProducts] = useState([]);
  const onAdd = (car) => {
    const exist = cartProducts.find((x) => x.id === car.id);
    if (exist) {
      setCartProducts(
        cartProducts.map((x) =>
          x.id === car.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartProducts([...cartProducts, { ...car, qty: 1 }]);
    }
  };
  const onRemove = (car) => {
    const exist = cartProducts.find((x) => x.id === car.id);
    if (exist.qty === 1) {
      setCartProducts(cartProducts.filter((x) => x.id !== car.id));
    } else {
      setCartProducts(
        cartProducts.map((x) =>
          x.id === car.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartProducts={cartProducts.length} />
      <div className="row">
        <Main onAdd={onAdd} cars={cars} />
        <ShoppingCart
          onAdd={onAdd}
          onRemove={onRemove}
          cartProducts={cartProducts}
        />
      </div>
    </div>
  );
};

export default App;

/*<Layout>
      <Switch>
        <Route path="/carshop" exact>
          <CarShop />
        </Route>
        <Route path="/shoppingbag">
          <ShoppingBag />
        </Route>
      </Switch>
    </Layout>*/
//<div>
//<Shop />
//</div>
