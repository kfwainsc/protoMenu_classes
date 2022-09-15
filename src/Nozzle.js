import React from "react";

export class Nozzle extends React.Component {
  render() {
    return (
      <figure>
        <img src={this.props.src} alt={this.props.alt} style={{maxWidth: "200px"}} />
        <figcaption>
          <h2>{this.props.alt}</h2>
        </figcaption>
      </figure>
    );
  }
}
