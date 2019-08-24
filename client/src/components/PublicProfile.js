import React from "react";
import useHttp from "../hooks/http";
import loadingSvg from "../logos/loading.svg";
import { Link } from "react-router-dom";

function PublicProfile(props) {
  const [data, loading] = useHttp(props.httpName);

  const details = () => {
    return (
      <Link to={`/${props.name}/comics/${data.results[0].id}`}>
        <div className="hero">
          <div
            id="heroPic"
            style={{
              backgroundImage: `url('${data.results[0].thumbnail.path}.jpg')`
            }}
          />
          <div id="heroTitle">
            <p id="heroTitleP">
              {props.name === "characters"
                ? data.results[0].name
                : data.results[0].fullName}
            </p>
          </div>
        </div>
      </Link>
    );
  };
  if (data && !loading) {
    return details();
  } else {
    return <img alt="loading svg" id="loadingSvg" src={loadingSvg} />;
  }
}

export default PublicProfile;
