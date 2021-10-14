import React from "react";

const Header = (props) => {
  const { countCartProducts } = props;
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Ben's Exotique</h1>
        </a>
      </div>
      <div>
        <a href="/cart">
          Cart {""}
          {countCartProducts ? (
            <button className="badge">{countCartProducts}</button>
          ) : (
            ""
          )}
        </a>
        <a href="/signin">SignIn</a>
      </div>
    </header>
  );
};

export default Header;
