import React from "react";
import axios from "axios";

class Home extends React.Component {
  state = {
    apod: ""
  };

  componentDidMount() {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=Mo9HjYXrAigWnWW9kpgRauq59C990DY0e3iOxTzO`
      )
      .then(response => {
        this.setState({
          apod: response.data
        });
        console.log(this.state.apod);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="apod-container">
          <h2 className="apod">NASA's Image of the Day</h2>
          {this.state.apod.media_type === "video" ? (
            <iframe
              src={this.state.apod.url}
              className="apod-vid"
              title={this.state.apod.title}
            ></iframe>
          ) : (
            <img
              className="apod-img"
              src={this.state.apod.hdurl}
              alt={this.state.apod.hdurl}
            />
          )}
          <h2 className="apod-title">{this.state.apod.title}</h2>
          <p className="apod-explanation">{this.state.apod.explanation}</p>
          {this.state.apod.copyright ? (
            <p className="apod-copyright">&copy; {this.state.apod.copyright}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Home;
