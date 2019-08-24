import React from "react";
import PublilcComics from "./PublicComics";

function CreatorComics({ match }) {
  return <PublilcComics name="creators" match={match} />;
}

export default CreatorComics;
