import React, { useState, useEffect } from "react";
import "../scss/scrollToTop.scss";

function ScrollToTop({ cap }) {
  console.log(cap);
  const [show, setShow] = useState(false);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset > 150 ? setShow(true) : setShow(false);
    };
    return setShow(false);
  }, []);
  return (
    <div>
      <button
        className="scrollToTop"
        onClick={scrollTop}
        style={show ? { display: "block" } : {}}
      >
        scroll to top
      </button>
    </div>
  );
}

export default ScrollToTop;
