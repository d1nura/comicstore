import React from "react";
import useHttp from "../hooks/http";
import { Link } from "react-router-dom";
import "../scss/events.scss";
import Loading from "./Loading";

function Events({ match }) {
  const [data, loading] = useHttp("events?limit=12&");
  const details = () => {
    return (
      <div className="events">
        <div id="eventDetails">
          {data.results.map((item, index) => {
            return (
              <div id="eventCovers" key={index}>
                <Link to={`events/${(match.params.id = item.id)}`}>
                  <img
                    alt="event cover"
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  />
                  <h3>{item.title}</h3>
                </Link>
              </div>
            );
          })}
        </div>
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

export default Events;
