import React from "react";
import Title from "../TitleComponent";
import Content from "../ContentComponent";
import "./Article.css";

function article(props) {
  return (
    <div className="article">
      <Title title={props.title} updatedAt={props.updatedAt} />
      <Content content={props.content} />
    </div>
  );
}

export default article;
