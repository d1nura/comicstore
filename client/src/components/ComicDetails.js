import React, { useState, useEffect, useContext } from "react";
import "../scss/comicDetails.scss";
import useHttp from "../hooks/http";
import axios from "axios";
import Context from "../components/Context";
import dateConverter from "../hooks/date";
import ripple from "../logos/ripple.svg";
import Loading from "./Loading";

function ComicDetails({ match }) {
  const [data, loading] = useHttp(`comics/${match.params.id}?`);
  const [disable, setDisable] = useState(false);
  const [load, setLoad] = useState(true);
  const [itemClic, setItemClic] = useState(false);
  const [cartItem] = useState({
    comicId: match.params.id,
    count: 1
  });
  const context = useContext(Context);
  useEffect(() => {
    axios.get("/cartItem/").then(res => {
      for (let i of res.data) {
        if (i.comicId === parseInt(match.params.id)) {
          setLoad(false);
          setDisable(true);
        } else {
          setLoad(true);
        }
      }
    });
    console.log(12);
  }, [match.params.id]);

  const itemBought = () => {
    setItemClic(true);
    setDisable(true);
    setLoad(true);
    axios.post("/cartItem/add", cartItem).then(res => {
      setLoad(false);
      context.setCartNo(context.cartNo + 1);
    });
  };
  const details = () => {
    let writer, penciler, coverArtist;

    const setNames = () => {
      let arr = data.results[0].creators.items;
      for (let i in arr) {
        switch (arr[i].role) {
          case "writer":
            writer = arr[i].name;
            break;
          case "letterer":
            writer = arr[i].name;
            break;
          case "colorist":
          case "colorist (cover)":
            coverArtist = arr[i].name;
            break;
          case "penciler":
          case "penciler (cover)":
          case "penciller (cover)":
            penciler = arr[i].name;
            break;
          default:
        }
      }
    };
    setNames();
    return (
      <div className="comicDetails">
        <img
          id="blurCover"
          src={`${data.results[0].thumbnail.path}.jpg`}
          alt="blurCover"
        />

        <div id="comicContainer">
          <img src={`${data.results[0].thumbnail.path}.jpg`} alt="comic pic" />
          <div id="detailsContainer">
            <h2>{data.results[0].title}</h2>
            <div>
              <h3>Published:</h3>
              <p>
                {data.results[0].dates[0].date
                  ? dateConverter(data.results[0].dates[0].date)
                  : "Date no Found"}
              </p>
            </div>
            <div id="penciler">
              <h3>Penciler:</h3>
              <p>{penciler ? penciler : "not found"}</p>
            </div>
            <div>
              <h3>Writer:</h3>
              <p>{writer ? writer : "not found"}</p>
            </div>
            <div>
              <h3>Cover Artist:</h3>
              <p>{coverArtist ? coverArtist : "not found"}</p>
            </div>

            <p>{data.results[0].discription}</p>
          </div>
        </div>

        <div id="comicPrice">
          <div id="cPrice2">
            <h4>EXTENDED CREDITS AND INFO</h4>
            <p>
              <b>Imprint:</b>Marvel Universe
            </p>
            <p>
              <b>Format:</b>
              {data.results[0].format}
            </p>
            <p>
              <b>Page count:</b>
              {data.results[0].pageCount}
            </p>
            <p>
              <b>UPC:</b>
              {data.results[0].upc}
            </p>
            <p>
              <b>FOC Date:</b>
              {data.results[0].dates[0].date
                ? dateConverter(data.results[0].dates[0].date)
                : "Date no Found"}
            </p>
          </div>
          <div>
            <h1 id="digitalIssue">DIGITAL ISSUE</h1>
            <p>Read online or on your iPhone, iPad or Android Device</p>
            <h1 id="priceTitle">
              $
              {data.results[0].prices[0].price !== 0
                ? data.results[0].prices[0].price
                : 3.99}
            </h1>
            <button
              disabled={disable}
              onClick={itemBought}
              style={disable ? { background: "rgb(141, 11, 11)" } : {}}
            >
              {!load ? "IN CART" : "BUY DIGITAL ISSUE"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (itemClic && load)
    return (
      <div id="addingToCart">
        <img alt="loading..." src={ripple} />
        <p>Adding item to Cart...</p>
      </div>
    );

  return data && !loading ? details() : <Loading />;
}

export default ComicDetails;
