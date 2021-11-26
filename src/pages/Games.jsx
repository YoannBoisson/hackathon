import React, { useContext } from "react";
import PagesAffContext from '../contexts/PagesAffContext';
import ThemeContext from "../contexts/ThemeContext";
import './pages.css';

const Games = () => {
  const { setCurrentAffConnexion, setCurrentAffInscription } = useContext(PagesAffContext);
  const { themeTitle } = useContext(ThemeContext);
  setCurrentAffConnexion(false);
  setCurrentAffInscription(false);
  return <div className="container"><h2>Bienvenue sur la page de jeux</h2></div>;
};

export default Games;
