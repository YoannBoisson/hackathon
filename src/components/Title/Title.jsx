import "./title.css";
import anime from "animejs/lib/anime.es.js";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

export default function Title() {
  const { themeTitle } = useContext(ThemeContext);
  let isAnimatingIn = false;
  let calledOut = false;
  let animOpened = false;

  function handleLetters() {
    if (animOpened) {
      animOut();
      animOpened = false;
      return;
    }

    if (isAnimatingIn) {
      calledOut = true;
      return;
    }

    isAnimatingIn = true;

    const animPromise = new Promise((resolve) => {
      animIn();
      setTimeout(() => {
        resolve();
      }, 750);
    });
    animPromise.then(() => {
      isAnimatingIn = false;

      if (calledOut) {
        animOut();
        calledOut = false;
      } else if (!calledOut) {
        animOpened = true;
      }
    });
  }

  function animIn() {
    anime({
      targets: "h1 span",
      translateX: function () {
        return anime.random(-250, 250);
      },
      translateY: function () {
        return anime.random(-250, 250);
      },
      translateZ: function () {
        return anime.random(-2000, 750);
      },
      rotate: function () {
        return anime.random(-250, 250);
      },
      easing: "easeOutCirc",
      duration: 750,
    });
  }

  function animOut() {
    anime({
      targets: "h1 span",
      translateX: 0,
      translateY: 0,
      translateZ: 0,
      rotate: 0,
      easing: "easeInQuad",
      duration: 750,
    });
  }
  return (
    <div className='container'>
      <h1 onMouseEnter={handleLetters} onMouseLeave={handleLetters} style={themeTitle}>
        <span>V</span>
        <span>e</span>
        <span>r</span>
        <span>i</span>
        <span>d</span>
        <span>i</span>
        <span>s</span>
        <span>Q</span>
        <span>u</span>
        <span>o</span>
      </h1>
    </div>
  );
}
