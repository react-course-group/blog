import React, { Component } from 'react';
import Article from "./ArticleComponent/Article";
import './App.css';

class App extends Component {

  state = {
    articles :[
      {title:"title 1",content:"content1"},
      {title:"title 1",content:"content1"},
      {title:"title 1",content:"content1"}
    ]
  }

  render() {
    return (
      <div className="App">
        {this.state.articles.map( article => <Article title={article.title} content={article.content}/> )}
      </div>
    );
  }
}

export default App;
