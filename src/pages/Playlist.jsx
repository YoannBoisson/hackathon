import React, { useContext } from "react";
import PagesAffContext from '../contexts/PagesAffContext';

const Games = () => {
  const { setCurrentAffConnexion, setCurrentAffInscription } = useContext(PagesAffContext);
  setCurrentAffConnexion(false);
  setCurrentAffInscription(false);
  return <h1>Bienvenue sur la page des playlists</h1>;
};

export default Games;