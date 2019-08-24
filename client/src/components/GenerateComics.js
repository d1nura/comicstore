import React from "react";
import useUri from "../hooks/uri";
import "../scss/comicGen.scss";
import loadingSvg from "../logos/loading.svg";
import { Link } from "react-router-dom";

function GenerateComics(props) {
  const [data, loading] = useUri("events", props.id, "comics");
  const details = () => {
    return (
      <div id="comicGen">
        {data.results.length > 0 ? (
          data.results.map((item, index) => {
            return (
              <div key={index}>
                <Link to={`/comics/${item.id}`}>
                  <img
                    alt="comic pic"
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  />
                  <h3>{item.title}</h3>
                </Link>
              </div>
            );
          })
        ) : (
          <p>No results found for Related Issues!</p>
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
        <p>loading Related Issues...</p>
      </div>
    );
  }
}

export default GenerateComics;
