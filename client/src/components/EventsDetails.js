import React from "react";
import useHttp from "../hooks/http";
import "../scss/eventsDetails.scss";
import GenerateComics from "./GenerateComics";
import GenerateCharacters from "./GenerateCharacters";
import dateConverter from "../hooks/date";
import Loading from "./Loading";

function EventsDetails({ match }) {
  const [data, loading] = useHttp(`events/${match.params.id}?`);
  const details = () => {
    return (
      <div className="eventsDetails">
        <div
          id="eventCoverpic"
          style={{
            backgroundImage: `url('${data.results[0].thumbnail.path}.jpg')`
          }}
        />
        <div id="eventDetailBox">
          <div
            id="boxDetails"
            style={{
              backgroundImage: `url('${data.results[0].thumbnail.path}.jpg')`
            }}
          />
          <div id="boxDiscription">
            <h1>{data.results[0].title}</h1>
            <h4>
              {dateConverter(data.results[0].start)} &nbsp;-&nbsp;
              {dateConverter(data.results[0].end)}
            </h4>
            <p>{data.results[0].description}</p>
          </div>
        </div>

        <div id="eventCharacters">
          <h1>characters in this event</h1>
          <GenerateCharacters id={data.results[0].id} />
        </div>

        <div id="comicBooks">
          <h1>Related issues</h1>
          <GenerateComics id={data.results[0].id} />
        </div>
      </div>
    );
  };

  if (data && !loading) {
    return details();
  } else {
    return <Loading />;
  }
}

export default EventsDetails;
