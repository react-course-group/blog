import React from "react";
import Title from "../TitleComponent";
import Content from "../ContentComponent";

function Article(props) {
  return (
    <div className="article">
      <Title articleId={props.id} title={props.title} createdAt={props.createdAt} />
      <Content content={props.content} />
    </div>
  );
}

export default Article;
