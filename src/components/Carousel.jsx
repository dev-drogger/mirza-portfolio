import { useState } from "react";
import { chevRight, chevLeft } from "../assets/icon";
import Card from "./Card.jsx";

const MAX_VISIBILITY = 2;

const Carousel = ({ cards, setPrev, setNext }) => {
  const [active, setActive] = useState(0);
  const count = cards.length;

  const next = () => setActive((prev) => Math.min(prev + 1, count - 1));
  const prev = () => setActive((prev) => Math.max(prev - 1, 0));

  const handlePrev = () => {
    prev();
    setPrev();
  };

  const handleNext = () => {
    next();
    setNext();
  };

  return (
    <div className="carousel">
      <button className="nav left" onClick={handlePrev} disabled={active === 0}>
        <img src={chevLeft} alt="" loading="lazy" />
      </button>

      {cards
        .slice(
          Math.max(0, active - MAX_VISIBILITY),
          Math.min(count, active + MAX_VISIBILITY + 1)
        )
        .map((_, i) => {
          const cardIndex = i + Math.max(0, active - MAX_VISIBILITY);
          return (
            <div
              key={cardIndex}
              className="card-container"
              style={{
                "--active": cardIndex === active ? 1 : 0,
                "--offset": (active - cardIndex) / 3,
                "--direction": Math.sign(active - cardIndex),
                "--abs-offset": Math.abs(active - cardIndex) / 3,
                opacity: active === cardIndex ? 1 : 0.5,
                pointerEvents: active === cardIndex ? "auto" : "none",
              }}
            >
              <Card index={cardIndex} />
            </div>
          );
        })}

      <button
        className="nav right"
        onClick={handleNext}
        disabled={active === count - 1}
      >
        <img src={chevRight} alt="" loading="lazy" />
      </button>
    </div>
  );
};

export default Carousel;
