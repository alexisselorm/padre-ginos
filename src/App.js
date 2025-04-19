import React from "react";
import {createRoot} from "react-dom";


const Pizza = (toppings) => {
  return React.createElement("div", {}, toppings?.name?? "like a normal pizza");
}



const App=()=>{
  return React.createElement("div", {},[
    React.createElement("h1", {}, "My Pizza"),
    React.createElement("p", {}, "huh"),
    React.createElement(Pizza, {name: "Cheese"}),
    React.createElement(Pizza, {name: "Mozzarella"}),
    React.createElement(Pizza, ),
  ]);
}

const root = document.getElementById("root");
const rootElement = createRoot(root);
rootElement.render(
  React.createElement(App)
);