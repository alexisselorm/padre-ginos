import React from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";

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
rootElement.render(<App />);
