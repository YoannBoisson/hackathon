import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import InfoUserContext from '../contexts/InfoUserContext';
import PagesAffContext from '../contexts/PagesAffContext';

const Navbar = () => {
  const { currentInfoUser, setCurrentInfoUser } = useContext(InfoUserContext);
  const { setCurrentAffConnexion, currentAffInscription, setCurrentAffInscription } = useContext(PagesAffContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Page d'accueil</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        {!currentAffInscription && currentInfoUser.length <= 0 ? (
        <Button
          sx={{ width: '100%' }}
          onClick={() => {
            setCurrentAffInscription(true);
          }}
        >
           <Link to="/inscription">Inscription</Link>
        </Button>
      ) : null}
      {currentInfoUser.length <= 0 ? (
        <Button
          sx={{ width: '100%' }}
          onClick={() => {
            setCurrentAffConnexion(true);
          }}
        >
          <Link to="/connexion">Connexion</Link>
        </Button>
      ) : (
        <Button
          sx={{ width: '100%' }}
          onClick={() => {
            setCurrentAffConnexion(false);
            setCurrentInfoUser([]);
          }}
        >
          Déconnexion
        </Button>
      )}
      </ul>
    </nav>
  );
};

export default Navbar;
