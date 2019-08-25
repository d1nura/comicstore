import React from "react";
import useHttp from "../hooks/http";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import ScrollToTop from "./ScrollToTop";

function SearchResults({ match }) {
  const [data, loading] = useHttp(
    `comics?titleStartsWith=${match.params.searchVal}&`
  );
  const results = () => {
    return (
      <div className="comics">
        <div id="comicDetails">
          {data.results.length > 0 ? (
            data.results.map((item, index) => {
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
            })
          ) : (
            <h1>Sorry, No results Found!</h1>
          )}
        </div>
        <ScrollToTop />
      </div>
    );
  };
  if (data && !loading) {
    return results();
  } else {
    return <Loading />;
  }
}

export default SearchResults;
