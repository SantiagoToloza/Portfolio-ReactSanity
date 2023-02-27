import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./normalize.css";
import App from "./App.jsx";

import "./index.css";
import QRINFO from "./QRINFO";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App />} />
      <Route path="/qrinfo" element={<QRINFO />} />
    </Routes>
  </BrowserRouter>
);
