import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import InfoUserContext from "../contexts/InfoUserContext";
import PagesAffContext from "../contexts/PagesAffContext";

const Navbar = () => {
  const { currentInfoUser, setCurrentInfoUser } = useContext(InfoUserContext);
  const { currentAffInscription, 
    currentAffConnexion, 
    setCurrentAffConnexion, 
    setCurrentAffInscription,
    currentAffDescription,
    setCurrentAffDescription,
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
        <Link to="/inscription">
          <Button sx={{ display: "block" }} >
            Inscription
          </Button>
        </Link>
      ) : null}

      {!currentAffConnexion && currentInfoUser.length <= 0 ? (
        <Link to="/connexion">
          <Button sx={{ display: "block" }} >
            Connexion
          </Button>
        </Link>
      ) : ( currentAffDescription ?
          (<>
          <Link to="/">
            <Button
              onClick={() => {
                setCurrentInfoUser([]);
                setCurrentAffConnexion(false);
                setCurrentAffInscription(false);
                setCurrentAffDescription(false);
              }}
              >
                Déconnexion
              </Button>
            </Link>
          </>) : null ) 
      }
    </div>
  );
};

export default Navbar;
