import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navOpen, setnavOpen] = useState("bx bx-menu");
  const [open, setOpen] = useState("sidebar");

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
            <Link to="/connexion">
              <i className="bx bxs-user-circle" />
              <span className="links_name">Connexion</span>
            </Link>
          </li>
          <li>
            <Link to="/inscription">
              <i className="bx bxs-id-card" />
              <span className="links_name">Inscription</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
