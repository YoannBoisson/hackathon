import React, { useContext } from "react";
import PagesAffContext from '../contexts/PagesAffContext';

const Games = () => {
  const { setCurrentAffConnexion, setCurrentAffInscription } = useContext(PagesAffContext);
  setCurrentAffConnexion(false);
  setCurrentAffInscription(false);
  return <div style={{paddingLeft: "78px"}}><h1>Bienvenue sur la page de jeux</h1></div>;
};

export default Games;
