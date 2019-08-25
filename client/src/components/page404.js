import React from "react";
import "../scss/page404.scss";
import { Link } from "react-router-dom";

function page404() {
  return (
    <div className="page404">
      <h1>
        <span>404</span> Page not found
      </h1>
      <Link to="/">Let's go back Home</Link>
    </div>
  );
}

export default page404;
