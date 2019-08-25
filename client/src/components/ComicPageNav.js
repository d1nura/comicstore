import React, { useState, useContext } from "react";
//import Comics from "./Comics";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Context from "../components/Context";
// import ComicDetails from "./ComicDetails";

function ComicPageNav() {
  const context = useContext(Context);
  const [offset, setOffset] = useState(280);
  const setOffsetVal = () => {
    setOffset(offset + 20);
    //match.params.pageNo = offset;
  };
  return (
    <div>
      <Router>
        <Link to={`/page/${offset}`}>
          <button onClick={setOffsetVal}>set</button>
        </Link>
        {/* <Route path="/page/:pageNo" exact component={Comics} propVal={match} /> */}
      </Router>
    </div>
  );
}

export default ComicPageNav;
