// import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// import the index.css file
import "./index.css";

// import the App component
import App from "./App";

// Create a root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
