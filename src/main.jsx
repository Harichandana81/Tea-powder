// src/main.jsx or src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
 // Ensure the store is imported correctly
import App from "./App";
import store from '/src/Store.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> {/* Pass the store to the Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);