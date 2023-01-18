import React from "react";
import Data from "./Datas.css";

function Display(props) {
  return (
    <div className="Display-edit">
      <h2>{props.Name}</h2>
      <h4>{props.Comment}</h4>
      <p className="word">{props.Content}</p>
    </div>
  );
}
export default Display;
