import React, { Component } from 'react';
import Article from "./ArticleComponent/Article";
import './App.css';

class App extends Component {

  state = { articles: [] };

  componentDidMount() {
    fetch('http://blog-api.webneat.net/posts').then(response => response.json()).then(json => this.setState({articles:json}))
  }

  render() {
    return (
      <div className="App">
        {this.state.articles!=null ? this.state.articles.map((article, index) => <Article key={index} title={article.title} content={article.content} updatedAt={article.updatedAt} />):
            <p>qsldfjkqlmsk</p> }
      </div>
    );
  }
}

export default App;
