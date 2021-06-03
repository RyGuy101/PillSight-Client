import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "sanitize.css";

import App from "./components/App";
import "./index.css";

if (process.env.NODE_ENV === "development") {
  console.log("Running in development mode");
} else {
  console.log("Running in production mode");
}

ReactDOM.render(<App />, document.getElementById("root"));
