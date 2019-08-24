import React from "react";
import useHttp from "../hooks/http";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Loading from "./Loading";

function PublilcComics(props) {
  const [data, loading] = useHttp(
    `${props.name}/${props.match.params.id}/comics?`
  );

  const details = () => {
    return (
      <div className="comics">
        <div id="comicDetails">
          {data.results.map((item, index) => {
            return (
              <div id="comicCovers" key={index}>
                <Link to={`/comics/${item.id}`}>
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
        <ScrollToTop />
      </div>
    );
  };

  if (data && !loading) {
    console.log(data);
    return details();
  } else {
    return <Loading />;
  }
}

export default PublilcComics;
