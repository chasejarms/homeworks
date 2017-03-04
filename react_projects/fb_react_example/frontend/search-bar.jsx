import React from 'react';

// The search box is state and the checkbox is state
// because they both change.

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.value);
  }
  render() {
    console.log(`the prop is ${this.props.inStockOnly}`);
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
          />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockInputChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
