import React, { Component } from "react";
import Feed from "./components/feed";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: 1,
          userName: "Marias",
          like: 10,
          coments: 2,
        },
        {
          id: 2,
          userName: "Karol",
          like: 120,
          coments: 200,
        },
        {
          id: 3,
          userName: "Vih0",
          like: 30,
          coments: 12,
        },
        {
          id: 4,
          userName: "teste",
          like: 1,
          coments: 1,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
            <Feed
              id={item.id}
              userName={item.userName}
              like={item.like}
              coments={item.coments}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
