import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "Amira Belhaj",
      Bio: "HAHHAHAAH",
      imgSrc:
        "https://femmedinfluence.fr/wp-content/uploads/2017/03/curly-hair-girl.jpg",
      Profession: "Student",
      Show: false,
      count: 0,
    };
  }

  handleClick = () => this.setState({ Show: !this.state.Show });

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Toggle the person's photo</button>
        <br />
        <div>
          {this.state.Show ? (
            <>
              <img
                src={this.state.imgSrc}
                alt="femme metisse"
                style={{ margin: 10 }}
              />
              <h1>
                The component has been rendered for {this.state.count} seconds
              </h1>
            </>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
