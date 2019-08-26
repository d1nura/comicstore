import React, { useState } from "react";
import Comics from "./Comics";
import ScrollToTop from "./ScrollToTop";
import useHttp from "../hooks/http";
import Loading from "./Loading";
import "../scss/comics.scss";
import Slider from "./Slider";

function Home({ match }) {
  const [offset, setOffset] = useState(260);
  const [data, loading] = useHttp(`comics?limit=20&offset=${offset}&`);
  //   const [comicArr, setComicArr] = useState([]);
  const addOffset = () => {
    setOffset(offset + 20);
  };
  const removeOffset = () => {
    offset >= 260 ? setOffset(offset - 20) : setOffset(260);
  };

  const results = () => {
    return (
      <React.Fragment>
        <Slider match={match} />
        <div className="comics">
          <Comics match={match} data={data} />
          <div id="comicBtnSet">
            <button onClick={removeOffset}>PREV</button>
            <button onClick={addOffset}>NEXT</button>
          </div>
          <ScrollToTop />
        </div>
      </React.Fragment>
    );
  };
  if (data && !loading) {
    return results();
  } else {
    return <Loading />;
  }
}

export default Home;
