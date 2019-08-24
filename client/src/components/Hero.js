import React from "react";
import PublicProfile from "./PublicProfile";

function Hero(props) {
  return (
    <PublicProfile
      name="characters"
      httpName={`characters?name=${props.heroName}&`}
    />
  );
}

export default Hero;
