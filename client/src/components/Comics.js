import React from "react";
import { Link } from "react-router-dom";

function Comics({ match, data }) {
  return (
    <div>
      <div id="comicDetails">
        {data.results.map((item, index) => {
          return (
            <div id="comicCovers" key={index}>
              <Link to={`/comics/${(match.params.id = item.id)}`}>
                <img
                  alt="comic cover"
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                />
                <h3>{item.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(Comics);
