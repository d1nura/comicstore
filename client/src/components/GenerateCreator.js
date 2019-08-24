import React from "react";
import PublicProfile from "./PublicProfile";

function GenerateCreator(props) {
  return (
    <PublicProfile
      name="creators"
      httpName={`creators?firstName=${props.name.firstName}&lastName=${
        props.name.lastName
      }&`}
      firstName="firstName"
    />
  );
}

export default GenerateCreator;
