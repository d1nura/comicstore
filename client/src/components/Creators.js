import React from "react";
import "../scss/creator.scss";
import GenerateCreator from "./GenerateCreator";

function Creator() {
  const details = () => {
    let names = [
      { firstName: "JASON", lastName: "AARON" },
      { firstName: "SALADIN", lastName: "AHMED" },
      { firstName: "DONNY", lastName: "CATES" },
      { firstName: "TA-NEHISI", lastName: "COATES" },
      { firstName: "RUSSELL", lastName: "DAUTERMAN" },
      { firstName: "AL", lastName: "EWING" },
      { firstName: "JONATHAN", lastName: "HICKMAN" },
      { firstName: "TINI", lastName: "HOWARD" },
      { firstName: "PEPE", lastName: "LARRAZ" },
      { firstName: "NNEDI", lastName: "OKORAFOR" },
      { firstName: "NICK", lastName: "SPENCER" },
      { firstName: "KELLY", lastName: "THOMPSON" }
    ];
    return (
      <div className="Creator">
        {names.map((item, index) => {
          return (
            <div key={index}>
              <GenerateCreator name={item} />
            </div>
          );
        })}
      </div>
    );
  };
  return details();
}

export default Creator;
