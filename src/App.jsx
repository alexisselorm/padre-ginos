import React from "react";
import { createRoot } from "react-dom";
import Order from "./Order";
import { div } from "prelude-ls";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
        <Order />
    </div>
  )
}
const root = document.getElementById("root");
const rootElement = createRoot(root);
rootElement.render(React.createElement(App));
