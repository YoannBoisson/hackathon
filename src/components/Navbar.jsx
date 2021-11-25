import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import InfoUserContext from "../contexts/InfoUserContext";
import PagesAffContext from "../contexts/PagesAffContext";

const Navbar = () => {
  const { currentInfoUser, setCurrentInfoUser } = useContext(InfoUserContext);
  const {
    setCurrentAffConnexion,
    currentAffInscription,
    setCurrentAffInscription,
  } = useContext(PagesAffContext);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Page d'accueil</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
        </ul>
      </nav>

      {!currentAffInscription && currentInfoUser.length <= 0 ? (
        <Button
          sx={{ display: "block" }}
          onClick={() => {
            setCurrentAffInscription(true);
          }}
        >
          <Link to="/inscription">Inscription</Link>
        </Button>
      ) : null}
      {currentInfoUser.length <= 0 ? (
        <Button
          sx={{ display: "block" }}
          onClick={() => {
            setCurrentAffConnexion(true);
          }}
        >
          <Link to="/connexion">Connexion</Link>
        </Button>
      ) : (
        <Button
          onClick={() => {
            setCurrentAffConnexion(false);
            setCurrentInfoUser([]);
          }}
        >
          Déconnexion
        </Button>
      )}
    </div>
  );
};

export default Navbar;
