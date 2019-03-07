import React, { Component } from 'react';
import Title from "../TitleComponent/Title"
import Content from '../ContentComponent/Content'
import './Article.css';

class Article extends Component {
  render() {
  return (
      <div className="article">
        <Title title={this.props.title} updatedAt={this.props.updatedAt} />
        <Content content={this.props.content}/>
      </div>
    );
  }
}

export default Article;
