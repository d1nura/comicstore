import React, { useState, useRef, useEffect } from "react";
import "../scss/slider.scss";
import arrow from "../logos/downarrow1.svg";
import useHttp from "../hooks/http";
import { Link } from "react-router-dom";

function Slider({ match }) {
  const [move, setMove] = useState(0);
  const [data, loading] = useHttp("comics?limit=4&offset=220&");

  const moveSlides = () => {
    move >= 300 ? setMove(0) : setMove(move + 100);
  };

  const addVal1 = () => {
    setMove(0);
  };
  const addVal2 = () => {
    setMove(100);
  };
  const addVal3 = () => {
    setMove(200);
  };
  const addVal4 = () => {
    setMove(300);
  };
  useEffect(() => {
    console.log(move);
  }, []);
  const slideShow = () => {
    return (
      <React.Fragment>
        <div className="slider">
          <div className="right-arrow" onClick={moveSlides}>
            <img src={arrow} alt="next slide"></img>
          </div>
          <div className="dots">
            <div
              id="dot"
              onClick={addVal1}
              style={move === 0 ? { background: "#E62429" } : {}}
            ></div>
            <div
              id="dot"
              onClick={addVal2}
              style={move === 100 ? { background: "#E62429" } : {}}
            ></div>
            <div
              id="dot"
              onClick={addVal3}
              style={move === 200 ? { background: "#E62429" } : {}}
            ></div>
            <div
              id="dot"
              onClick={addVal4}
              style={move === 300 ? { background: "#E62429" } : {}}
            ></div>
          </div>
          <div className="slides">
            {data.results.map((item, index) => {
              return (
                <div
                  id="slide"
                  key={index}
                  style={{
                    transform: `translate(-${move}%)`,
                    backgroundImage: `url("${item.images[0].path}.${item.images[0].extension}")`
                  }}
                >
                  <div id="slideTitle">
                    <h1>{item.title}</h1>
                    <Link to={`/comics/${(match.params.id = item.id)}`}>
                      <button>Read More</button>
                    </Link>
                  </div>
                  <div id="shadowCover"></div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  };

  if (data && !loading) {
    return slideShow();
  } else {
    return (
      <div id="loadingSlider">
        <h1>Loading slider...</h1>
      </div>
    );
  }
}

export default React.memo(Slider);
