import React from "react";
import "./App.css";
import IMG_LIST from "./imgs/imgList.js";
import {Menu} from "./Menu.js";
import {Nozzle} from "./Nozzle.js";

/*        <label for="nozzleMenu">Choose Nozzle:</label>
        <select name="nozzleMenu" id="nozzleMenu">
          <option value="chief">1</option>
          <option value="smoothbore">2</option>
          <option value="tft">3</option>
        </select>
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {src: IMG_LIST.nozzles.chief, alt: "chief"};
    this.chooseNozzle = this.chooseNozzle.bind(this);
  }
  chooseNozzle(newNozzle) {
    this.setState({
      src: IMG_LIST.nozzles[newNozzle],
      alt: newNozzle,
    });
  }
  render() {
    return (
      <div>
        <h1>Nozzle Options</h1>
        <Menu chooseNozzle={this.chooseNozzle} />
        <Nozzle src={this.state.src} alt={this.state.alt} />
      </div>
    );
  }
}
export default App;
