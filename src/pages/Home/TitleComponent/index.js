import React from "react";
import {Link} from "react-router-dom";
import "./Title.css";

function Title(props) {
  let createdAt = new Date(props.createdAt);
  let link = "/post/" + props.articleId;
  console.log(link)
  return (
    <Link to={link}>
      <div className="title">
        <h1>
          {props.title}
          <span className="createdAt">{createdAt.toDateString()}</span>
        </h1>
      </div>
    </Link>
  );
}

export default Title;
