import React from "react";
import loading from "../logos/loading.svg";
import "../scss/loading.scss";

function Loading() {
  return (
    <React.Fragment>
      <div className="trs" />
      <div className="loadingA">
        <img src={loading} alt="loading..." />
        <p>Loading please wait...</p>
      </div>
    </React.Fragment>
  );
}

export default Loading;
