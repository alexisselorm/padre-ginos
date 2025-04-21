import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

const App = () => {
  return <RouterProvider router={router} />;
};
const root = document.getElementById("root");
const rootElement = createRoot(root);
rootElement.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
