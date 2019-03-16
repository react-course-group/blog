import React from "react";
import "./Title.css";

function Title(props) {

  let createdAt = new Date(props.createdAt);
  return (
    <div className="title">
      <h1>
        {props.title}
        <span className="createdAt">{createdAt.toDateString()}</span>
      </h1>
    </div>
  );
}

export default Title;
