import React from "react";
import ReactDOM from "react-dom";
import Tabs from './tabs.jsx';

const Panes = [
  { title: "Weather" },
  { title: "Clock" },
  { title: "Auto Complete" }
];

class Root extends React.Component {

  constructor(props) {
    super(props);
    this.state = { pageIndex: 0 };
  }

  render() {
    return (
    <div>
      <Tabs panes = { Panes }/>
    </div>
    );
  }
}

export default Root;

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('main');
  ReactDOM.render(< Root />, root);
});
