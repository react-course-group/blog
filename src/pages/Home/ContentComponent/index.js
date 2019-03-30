import React from "react";
import "./Content.css";

function Content(props) {
  var res; 
  if(props.content !== undefined)
    res = props.content.substring(1, 40);
  return (
  <div>
    <p className="content">{res}</p>
  </div>);
}

export default Content;
