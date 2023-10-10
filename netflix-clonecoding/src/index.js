import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Movie from "./Components/Movie";

ReactDOM.render(
  <React.StrictMode>
    <Movie />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
