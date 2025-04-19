import React from "react";
import { createRoot } from "react-dom";
import Pizza from "./Pizza";
import { div } from "prelude-ls";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Margherita" description="Tomato, mozzarella, and basil" image={"/public/pizzas/big_meat.webp"}/>
      <Pizza name="Pepperoni" description="Tomato, mozzarella, and pepperoni" image={"/public/pizzas/pepperoni.webp"}/>
      <Pizza name="Vegetarian" description="Tomato, mozzarella, and vegetables" image={"/public/pizzas/hawaiian.webp"}/> 
      <Pizza />
    </div>
  )
}
const root = document.getElementById("root");
const rootElement = createRoot(root);
rootElement.render(React.createElement(App));
