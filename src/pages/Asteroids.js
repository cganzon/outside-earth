import React, { Component } from "react";
import axios from "axios";

class Mars extends Component {
  state = {
    data: ""
  };

  componentDidMount() {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=Mo9HjYXrAigWnWW9kpgRauq59C990DY0e3iOxTzO`
      )
      .then(response => {
        console.log(response);
        //   this.setState({
        //     apod: response.data
        //   });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>This is the asteroids page</h1>
      </div>
    );
  }
}

export default Mars;
