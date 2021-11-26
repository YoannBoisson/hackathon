import React, { useState, useContext } from "react";
import PagesAffContext from "../contexts/PagesAffContext";
import ThemeContext from "../contexts/ThemeContext";
import "./pages.css";
import Images from './Images';
import {shuffle} from 'lodash';

const Games = () => {
  const { setCurrentAffConnexion, setCurrentAffInscription } =
    useContext(PagesAffContext);
  const { themeTitle } = useContext(ThemeContext);
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
      
      <h2>Bienvenue sur la page de jeux</h2>
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
                <div className="back" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="stats">
        {won && (
          <>
            You won the game! Congratulations!
            <br />
            Click any card to play again.
            <br />
            <br />
          </>
        )}
        Clicks: {clicks} &nbsp;&nbsp;&nbsp; Found pairs:{foundPairs.length / 2}
      </div>
    </div>
  );
};
export default Games;
