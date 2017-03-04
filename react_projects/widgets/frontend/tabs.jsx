import React from 'react';
import Tab from './tabs';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.liFormat = this.liFormat.bind(this);
  }
  //
  // liFormat() {
  //   let { tabNames } = this.props;
  //   tabNames = tabNames.map((obj, idx) => {
  //     return (
  //       <div key={ idx }>
  //         <li key={ idx }>{ obj.title }</li>
  //       </div>
  //     );
  //   });
  //   return tabNames;
  // }
  //
  render() {
    return (
      <h1>Inside React Tabs Page</h1>
    );
  }
}

export default Tabs;
