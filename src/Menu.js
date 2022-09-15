import React from "react";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const choice = e.target.value;
    this.props.chooseNozzle(choice);
  }
  render() {
    return (
      <form>
        <input type="radio" name="src" value="chief" onClick={this.handleClick} />
        Chief
        <input type="radio" name="src" value="smoothbore" onClick={this.handleClick} /> Smoothbore
        <input type="radio" name="src" value="tft" onClick={this.handleClick} /> TFT
      </form>
    );
  }
}
