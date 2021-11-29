import React, { useState, useContext } from "react";
import PagesAffContext from "../contexts/PagesAffContext";
import ThemeContext from "../contexts/ThemeContext";
import "./pages.css";
import Images from './Images';
import {shuffle} from 'lodash';

const Games = () => {
  const { setCurrentAffConnexion, setCurrentAffInscription } =
    useContext(PagesAffContext);
  const { themeTitle, theme } = useContext(ThemeContext);
  setCurrentAffConnexion(false);
  setCurrentAffInscription(false);

  const [cards, setCards] = useState(shuffle([...Images, ...Images]));
  const [clicks, setClicks] = useState(0);
  const [won, setWon] = useState(false);
  const [activeCards, setActiveCards] = useState([]);
  const [foundPairs, setFoundPairs] = useState([]);

  function flipCard(index) {
    if (won) {
      setCards(shuffle([...Images, ...Images]));
      setFoundPairs([]);
      setWon(false);
      setClicks(0);
    }
    if (activeCards.length === 0) {
      setActiveCards([index]);
    }
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondsIndex = index;
      if (cards[firstIndex] === cards[secondsIndex]) {
        if (foundPairs.length + 2 === cards.length) {
          setWon(true);
        }
        setFoundPairs([...foundPairs, firstIndex, secondsIndex]);
      }
      setActiveCards([...activeCards, index]);
    }
    if (activeCards.length === 2) {
      setActiveCards([index]);
    }
    setClicks(clicks + 1);
  }

  return (
    <div className="container" style={themeTitle}>
      <div className="board">
        {cards.map((card, index) => {
          const flippedToFront =
            activeCards.indexOf(index) !== -1 ||
            foundPairs.indexOf(index) !== -1;
          return (
            <div
              className={"card-outer " + (flippedToFront ? "flipped" : "")}
              onClick={() => flipCard(index)}
            >
              <div className="card">
                <div className="front">
                  <img src={card} alt="" />
                </div>
                <div className="back" ><span style={{fontSize: "50px", color: 'white', textAlign: 'center', lineHeight: "60px"}}>?</span></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="stats" style={{theme}}>
        {won && (
          <>
            Vous avez gagné ! Meme si vous avez bien galérer.
            <br />
            Cliquez sur une carte pour rejouer.
            <br />
            <br />
          </>
        )}
        Nombre de clicks : {clicks} &nbsp;&nbsp;&nbsp; Nombre de paires trouvées : {foundPairs.length / 2}
      </div>
    </div>
  );
};
export default Games;
