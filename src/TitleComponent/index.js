import React from "react";
import "./Title.css";

function Title(props) {
  return (
    <div className="title">
      <h1>
        {props.title}
        <span className="updateAt">{props.updatedAt}</span>
      </h1>
    </div>
  );
}

export default Title;
