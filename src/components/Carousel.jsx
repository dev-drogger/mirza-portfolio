import { useState, useContext } from "react";
import { chevRight, chevLeft } from "../assets/icon";
import Card from "./Card.jsx";
import { ProjectContext } from "./ProjectContext";

const Carousel = () => {
  const [active, setActive] = useState(0);
  const { nextProject, prevProject, projectCard } = useContext(ProjectContext);

  const cards = projectCard;
  const count = cards.length;
  const MAX_VISIBILITY = 2;

  const next = () => setActive((prev) => Math.min(prev + 1, count - 1));
  const prev = () => setActive((prev) => Math.max(prev - 1, 0));

  const handlePrev = () => {
    prev();
    prevProject();
  };

  const handleNext = () => {
    next();
    nextProject();
  };

  return (
    <div className="overflow-x-hidden w-full">
      <div className="carousel">
        <button
          className="nav left"
          onClick={handlePrev}
          disabled={active === 0}
        >
          <img src={chevLeft} alt="" loading="lazy" />
        </button>

        {cards
          .slice(
            Math.max(0, active - MAX_VISIBILITY),
            Math.min(count, active + MAX_VISIBILITY + 1)
          )
          .map((project, i) => {
            const cardIndex = i + Math.max(0, active - MAX_VISIBILITY);
            return (
              <div
                key={cardIndex}
                className={`card-container`}
                style={{
                  "--active": cardIndex === active ? 1 : 0,
                  "--offset": (active - cardIndex) / 3,
                  "--direction": Math.sign(active - cardIndex),
                  "--abs-offset": Math.abs(active - cardIndex) / 3,
                  opacity: active === cardIndex ? 1 : 0.5,
                  pointerEvents: active === cardIndex ? "auto" : "none",
                }}
              >
                <Card thumbnail={project.thumbnail} />
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
    </div>
  );
};

export default Carousel;
