import React from "react";
import Pizza from "./Pizza";

const Menu = () => {
  return (
    <div className="menu">
      <h2>OUR MENU</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from{" "}
        <br></br>
        our stone oven, all organic, all delicious.
      </p>
      <Pizza />
    </div>
  );
};

export default Menu;
