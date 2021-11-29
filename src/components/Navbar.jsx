import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

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

    </div>
  );
};

export default Navbar;
