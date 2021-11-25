import React from "react";
import { Routes, Route } from "react-router-dom";
import Games from "./pages/Games";
import HomePage from "./pages/HomePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/games" element={<Games />} />
    </Routes>
  );
}

export default Router;
