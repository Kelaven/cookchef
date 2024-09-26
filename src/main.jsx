import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.scss";
import { ApiContext } from "./context/apiContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiContext.Provider value="/data/recipes.json">
      <App />
    </ApiContext.Provider>
  </StrictMode>
);
