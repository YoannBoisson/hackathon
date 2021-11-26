import React, { useState, useContext } from "react";
import "./emojiwheel.css";
import Button from "@mui/material/Button";
import PagesAffContext from "../../contexts/PagesAffContext";

const EmojiWheel = () => {
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
        <div className="humor">
          <div className="humor-1" id="1479458365" onClick={handleId}>
            😁
          </div>
          <div className="humor-2" id="1154685481" onClick={handleId}>
            🥵
          </div>
          <div className="humor-3" id="8573944922" onClick={handleId}>
            😡
          </div>
          <div className="humor-4" id="1386208615" onClick={handleId}>
            🥳
          </div>
          <div className="humor-5" id="1290316405" onClick={handleId}>
            😎
          </div>
          <div className="humor-6" id="6907602664" onClick={handleId}>
            😭
          </div>
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
