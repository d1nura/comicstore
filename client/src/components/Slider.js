import React, { useState } from "react";
import "../scss/slider.scss";

function Slider() {
  //const [next, setNext] = useState();
  let [x, setX] = useState(0);
  //   let [n, setN] = useState(1);

  const showNextSlide = () => {
    setX(parseInt(x - 100));
    // if (n < 4) {
    //   setX(100 * n);
    //   setN(n++);
    // }
    // if (n > 3) setN(0);
    // console.log(x);
  };
  console.log(x);
  return (
    <React.Fragment>
      <div className="slider">
        <div id="nextSlide" onClick={showNextSlide}>
          >
        </div>
        <div id="slide" style={{ transform: `translateX(100%)` }}>
          1{x}
        </div>
        <div id="slide" style={{ transform: `translateX(-${x}%)` }}>
          2{x}
        </div>
        <div id="slide" style={{ transform: `translateX(-${x}%)` }}>
          3{x}
        </div>
        <div id="slide" style={{ transform: `translateX(-${x}%)` }}>
          4{x}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Slider;
