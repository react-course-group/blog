import React from "react";
import "./Content.css";

function Content(props) {
  return (
  <div>
    <p className="content">{props.content}</p>
  </div>);
}

export default Content;
