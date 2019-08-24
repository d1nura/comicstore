import React, { useState, useEffect } from "react";
import useHttp from "../hooks/http";
import "../scss/comics.scss";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import ScrollToTop from "./ScrollToTop";

function Comics({ match }) {
  const [offset, setOffset] = useState(260);

  match.params.pageNo = offset;
  const offsetValMinus = () => {
    offset >= 260 ? setOffset(match.params.pageNo - 20) : setOffset(260);
    match.params.pageNo = offset;
  };
  const offsetValPlus = () => {
    setOffset(offset + 20);
    match.params.pageNo = offset;
  };

  const [data, loading] = useHttp(
    `comics?limit=20&offset=${match.params.pageNo}&`
  );
  useEffect(() => {}, [offset]);

  const details = () => {
    return (
      <div className="comics">
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
        <div id="comicBtnSet">
          <Link to={`/page/${offset}`}>
            <button onClick={offsetValMinus}>PREV</button>
          </Link>
          <Link to={`/page/${offset}`}>
            <button onClick={offsetValPlus}>NEXT</button>
          </Link>
        </div>
        <ScrollToTop />
      </div>
    );
  };

  if (data && !loading) {
    return details();
  } else {
    return <Loading />;
  }
}

export default React.memo(Comics);
