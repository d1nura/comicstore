import React, { useState, useEffect } from "react";
import "../scss/searchBar.scss";
import useHttp from "../hooks/http";
import ripple from "../logos/ripple.svg";
import { Link, Redirect } from "react-router-dom";

function SearchBar({ showSearch }) {
  const [title, setTitle] = useState();
  const [isEmpty, setIsEmpty] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [searchVal, setSearchVal] = useState();

  const [data, loading] = useHttp(`comics?titleStartsWith=${title}&`);

  useEffect(() => {
    setRedirect(false);
  }, [redirect]);

  const getInput = e => {
    if (e.target.value !== "") {
      setTitle(e.target.value);
      setIsEmpty(false);
      setShowResults(true);
    } else {
      setTitle();
      setIsEmpty(true);
      //   setShowResults(false);
    }
  };
  const getFocus = () => {
    setShowResults(true);
  };
  document.onclick = e => {
    if (e.target.value !== title) {
      setShowResults(false);
    }
  };
  const hideSearchResults = () => {
    setShowResults(false);
  };

  const getEnter = e => {
    if (e.key === "Enter" && e.target.value !== "") {
      setRedirect(true);
      setSearchVal(e.target.value);
      setShowResults(false);
    }
  };

  return (
    <React.Fragment>
      {redirect ? <Redirect to={`/searchResults/${searchVal}`} /> : ""}
      <div className="searchBar" id={showSearch ? "bringDown" : ""}>
        <input
          id="inputBar"
          type="text"
          placeholder="Search comics"
          onChange={getInput}
          onFocus={getFocus}
          onKeyPress={getEnter}
        />
      </div>
      <div className="searchResults" style={showResults ? {} : { height: 0 }}>
        {data && !loading && !isEmpty ? (
          data.results.slice(0, 5).map((item, index) => {
            return (
              <Link
                onClick={hideSearchResults}
                key={index}
                to={`/comics/${item.id}`}
              >
                <p>{item.title}</p>
              </Link>
            );
          })
        ) : isEmpty ? (
          " "
        ) : (
          <div id="searchLoading">
            <img src={ripple} alt="loading..." />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default SearchBar;
