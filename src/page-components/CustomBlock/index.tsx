import ReactDOM from "react-dom";
import HighChart from "../HighChart";
export default class CustomBlock {
  nodes: {
    holder: HTMLDivElement | null;
  };

  constructor() {
    this.nodes = {
      holder: null,
    };
  }

  static get toolbox() {
    return {
      title: "Chart",
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="30" height="120" fill="black" /><rect x="130" y="60" width="30" height="90" fill="black" /><rect x="210" y="45" width="30" height="105" fill="black" /><rect x="290" y="75" width="30" height="75" fill="black" /></svg>',
    };
  }

  render(): HTMLDivElement | null {
    const rootNode = document.createElement("div");
    this.nodes.holder = rootNode;

    ReactDOM.render(<HighChart />, rootNode);

    return this.nodes.holder;
  }
}
