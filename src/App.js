import React, { Component } from "react";
import Article from "./ArticleComponent";
import "./App.css";

class App extends Component {
  state = { articles: [] };

  componentDidMount() {
    fetch("http://blog-api.webneat.net/posts")
      .then(response => response.json())
      .then(json => this.setState({ articles: json }));
  }

  render() {
    return (
      <div className="App">
        {this.state.articles.length > 0 ? (
          this.state.articles.map((article) => (
            <Article key={article.id} {...article} />
          ))
        ) : (
          <p>qsldfjkqlmsk</p>
        )}
      </div>
    );
  }
}

export default App;
