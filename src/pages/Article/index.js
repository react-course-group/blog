import React, { Component } from "react";
import Article from "../../components/ArticleComponent";
import Loading from "../../components/LoadingComponent";

class HomeComponent extends Component {
  state = { article: {}, loading: true };

  async componentDidMount() {
    try {
      const response = await fetch(
        "http://blog-api.webneat.net/posts/" + this.props.match.params.id
      );
      const json = await response.json();
      this.setState({ article: json });
      this.setState({ loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      this.state.loading ? <Loading>Loading...</Loading>:
      <div className="App">
        {this.state.article != null ? (
          <Article articleId={this.state.article.id} {...this.state.article} />
        ) : null}
      </div>
    );
  }
}

export default HomeComponent;
