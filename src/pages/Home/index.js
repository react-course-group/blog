import React,{Component} from "react";
import Article from "./ArticleComponent";
class HomeComponent extends Component {

  state = { articles: [] };

  componentDidMount() {
    fetch("http://blog-api.webneat.net/posts")
      .then(response => response.json())
      .then(json => this.setState({ articles: json }))
      .catch(function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      });
  }

  render() {
    return (
      <div className="App">
        {(this.state.articles.map((article) => (<Article key={article.id} {...article} />)))}
      </div>
    );
  }
}

export default HomeComponent;