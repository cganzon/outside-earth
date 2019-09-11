import React, { Component } from "react";
import axios from "axios";

class Rovers extends Component {
  state = {
    data: ""
  };

  componentDidMount() {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Mo9HjYXrAigWnWW9kpgRauq59C990DY0e3iOxTzO`
      )
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="images-container">
        <h2 className="rover-title">Curiosity Rover</h2>
        <p className="rover-info">Curiosity is a car-sized rover designed to explore the crater Gale on Mars as part of NASA's Mars Science Laboratory mission. Curiosity was launched from Cape Canaveral on November 26, 2011, at 15:02 UTC and landed on Aeolis Palus inside Gale on Mars on August 6, 2012, 05:17 UTC. See photos of Mars from the Curiosity rover's cameras below.</p>
          {this.state.data
            ? this.state.data.photos.map(photo => (
                <img
                  className="rover-img"
                  src={photo.img_src}
                  alt={photo.img_src}
                  key={photo.img_src}
                />
              ))
            : ""}
        </div>
      </div>
    );
  }
}

export default Rovers;
