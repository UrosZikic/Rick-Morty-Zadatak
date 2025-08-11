import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Characters from "./pages/Characters";
import Episode from "./pages/Episode";
import Location from "./pages/Location";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
