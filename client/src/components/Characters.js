import React from "react";
import Hero from "./Hero";
import "../scss/characters.scss";

function Characters() {
  let heroArr = [
    "AVENGERS",
    "SPIDER-MAN",
    "IRON MAN",
    "BLACK PANTHER",
    "DEADPOOL",
    "CAPTAIN AMERICA",
    "JESSICA JONES",
    "WOLVERINE",
    "LUKE CAGE",
    "GUARDIANS OF THE GALAXY",
    "S.H.I.E.L.D.",
    "THOR"
  ];

  const details = () => {
    return (
      <div className="character">
        {heroArr.map((item, index) => {
          return (
            <div key={index}>
              <Hero heroName={item} />
            </div>
          );
        })}
      </div>
    );
  };
  return details();
}

export default Characters;
