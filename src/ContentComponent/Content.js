import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  render() {
    return (
        <p className="content">{this.props.content}</p>
    );
  }
}

export default Content;
