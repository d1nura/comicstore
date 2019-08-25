import React from "react";
import useUri from "../hooks/uri";
import "../scss/generateCharacters.scss";
import loadingSvg from "../logos/loading.svg";
import { Link } from "react-router-dom";

function GenerateCharacters(props) {
  const [data, loading] = useUri("events", props.id, "characters");
  const details = () => {
    return (
      <div id="characterGen">
        {data.results.length > 0 ? (
          data.results.slice(0, 5).map((item, index) => {
            return (
              <Link key={index} to={`/characters/comics/${item.id}`}>
                <div className="hero">
                  <div
                    id="heroPic"
                    style={{
                      backgroundImage: `url('${item.thumbnail.path}.jpg')`
                    }}
                  />
                  <div id="heroTitle">
                    <p id="heroTitleP">{item.name}</p>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p>No results found for Characters!</p>
        )}
      </div>
    );
  };
  if (data && !loading) {
    return details();
  } else {
    return (
      <div id="loading">
        <img alt="loading svg" id="loadingGenSvg" src={loadingSvg} />
        <p>loading Characters...</p>
      </div>
    );
  }
}

export default GenerateCharacters;
