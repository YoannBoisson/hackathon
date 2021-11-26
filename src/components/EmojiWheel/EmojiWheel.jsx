import React, { useState, useContext } from "react";
import "./emojiwheel.css";
import Button from "@mui/material/Button";
import PagesAffContext from "../../contexts/PagesAffContext";

const EmojiWheel = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const [id, setId] = useState("53362031");
  const { currentAffMusiqueHumeur, setCurrentAffMusiqueHumeur } =
    useContext(PagesAffContext);
  const handleId = (e) => {
    setId(e.target.id);
    setCurrentAffMusiqueHumeur(true);
  };

  return (
    <>
      {!currentAffMusiqueHumeur ? (
        <div
          id="mainMenu"
          className={
            toggleMenu
              ? "mainMenuOverlay floating2 open"
              : "mainMenuOverlay floating2"
          }
          onClick={handleMenu}
        >
          <div className="navire floating3"></div>
          <div className="itemMenuBox bills">
            <p className="itemMenu " id="1479458365" onClick={handleId}>
              😁
            </p>
          </div>
          <div className="itemMenuBox tarsheed">
            <p className="itemMenu " id="1154685481" onClick={handleId}>
              🥵
            </p>
          </div>
          <div className="itemMenuBox employees">
            <p className="itemMenu " id="8573944922" onClick={handleId}>
              😡
            </p>
          </div>
          <div className="itemMenuBox location">
            <p className="itemMenu " id="1386208615" onClick={handleId}>
              🥳
            </p>
          </div>
          <div className="itemMenuBox eservices">
            <p className="itemMenu " id="1290316405" onClick={handleId}>
              😎
            </p>
          </div>
          <div className="itemMenuBox contact">
            <p
              className="itemMenu "
              id="6907602664"
              onClick={handleId}
            >
              😭
            </p>
          </div>

          <p className="toggleMenu floating">🎶</p>
        </div>
      ) : (
        <Button
          onClick={() => {
            setCurrentAffMusiqueHumeur(false);
          }}
        >
          Retour au choix
        </Button>
      )}
      {currentAffMusiqueHumeur ? (
        <iframe
          title="deezer-widget"
          src={`https://widget.deezer.com/widget/dark/playlist/${id}?tracklist=false`}
          width="100%"
          height="300"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media; clipboard-write"
        />
      ) : null}
    </>
  );
};

export default EmojiWheel;
