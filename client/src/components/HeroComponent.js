import React from "react";
import PublilcComics from "./PublicComics";

function HeroComponent({ match }) {
  return <PublilcComics name="characters" match={match} />;
}
export default HeroComponent;
