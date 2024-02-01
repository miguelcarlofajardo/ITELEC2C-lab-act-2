import React from "react";
import "./Content.css";

function Content(props) {
  return (
    <div className="content">
      <img src={props.contentObj.photoName} alt={props.contentObj.name} />
      <div className="content-info">
        <h2>{props.contentObj.title}</h2>
        <p>{props.contentObj.description}</p>
        <button>Read Here</button>
      </div>
    </div>
  );
}

export default Content;
