import React, { Component } from "react";

class Feed extends Component {
  render() {
    return (
      <div key={this.props.id}>
        <div>
          <h3>{this.props.userName}</h3>

          <a>
            {this.props.like > 1 ? (
              <div>likes: {this.props.like} </div>
            ) : (
              <div>like: {this.props.like}</div>
            )}
            {this.props.Component > 1 ? (
              <div>coments: {this.props.coments}</div>
            ) : (
              <div>coment: {this.props.coments}</div>
            )}
          </a>
          <hr />
        </div>
      </div>
    );
  }
}

export default Feed;
