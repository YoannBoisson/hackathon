import React from "react";
import { Routes, Route } from "react-router-dom";
import Games from "./pages/Games";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Playlist from './pages/Playlist';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/games" element={<Games />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/inscription" element={<SignUp />} />
      <Route path="/connexion" element={<SignIn />} />
    </Routes>
  );
}

export default Router;
