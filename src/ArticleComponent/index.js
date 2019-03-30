import React from "react";
import Content from "../ContentComponent";
import "./Article.css";

function Article(props) {
    let createdAt = new Date(props.createdAt);
  return (
    <div className="article">
    <div className="title">
        <h1>
            {props.title}
            <span className="createdAt">{createdAt.toDateString()}</span>
        </h1>
    </div>
  <Content content={props.content} />
    </div>
  );
}

export default Article;
