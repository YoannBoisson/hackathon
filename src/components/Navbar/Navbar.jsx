import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import InfoUserContext from "../../contexts/InfoUserContext";
import PagesAffContext from "../../contexts/PagesAffContext";


function Navbar() {
  const [navOpen, setnavOpen] = useState("bx bx-menu");
  const [open, setOpen] = useState("sidebar");
  const { currentInfoUser, setCurrentInfoUser, setReponseBdd } = useContext(InfoUserContext);
  const { currentAffInscription, 
    currentAffConnexion, 
    setCurrentAffConnexion, 
    setCurrentAffInscription,
    currentAffDescription,
    setCurrentAffDescription,
   } = useContext(PagesAffContext);

  function menuBtnChange() {
    setnavOpen((prevNavOpen) => {
      console.log(prevNavOpen);
      return prevNavOpen === "bx bx-menu" ? "bx bx-disc" : "bx bx-menu";
    });

    setOpen((prevOpen) =>
      prevOpen === "sidebar" ? "sidebar open" : "sidebar"
    );
  }

  return (
    <div className="App">
      <div className={open}>
        <div className="logo-details">
          <div className="logo_name">
            HLK.
            <br />
            <span className="logo-title">Hackathon</span>
          </div>
          <i
            className={navOpen}
            id="btn"
            onClick={menuBtnChange}
            aria-hidden="true"
          />
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/">
              <i className="bx bx-home" />
              <span className="links_name">Accueil</span>
            </Link>
          </li>
          <li>
            <Link to="/playlist">
              <i class="bx bxs-playlist"></i>
              <span className="links_name">Playlist</span>
            </Link>
          </li>
          <li>
            <Link to="/games">
              <i class="bx bx-game"></i>
              <span className="links_name">Jeux</span>
            </Link>
          </li>
          <li>
          {!currentAffInscription && currentInfoUser.length <= 0 ? (
          <li>
            <Link to="/inscription">
              <i className="bx bxs-id-card" />
              <span className="links_name">Inscription</span>
            </Link>
          </li>
      ) : null}

      {!currentAffConnexion && currentInfoUser.length <= 0 ? (
          <li>
            <Link to="/connexion">
              <i className="bx bxs-user-circle" />
              <span className="links_name">Connexion</span>
            </Link>
          </li>
      ) : ( currentAffDescription ?
          (<>
            <li
              onClick={() => {
                setCurrentInfoUser([]);
                setCurrentAffConnexion(false);
                setCurrentAffInscription(false);
                setCurrentAffDescription(false);
                setReponseBdd('');
              }}
              >
                <Link to="/">
                  <i class='bx bx-exit'></i>
                  <span className="links_name">Déconnexion</span>
                </Link>
              </li>
          </>) : null ) 
      }
          </li>
          <li style={{ color: 'white', textAlign: 'center' }}>
          {open === "sidebar open" 
          ? 
          currentInfoUser.username 
          : 
          ( 
            currentAffDescription 
            ? 
            <i className="bx bxs-user-circle" /> 
            : 
            null
          )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
