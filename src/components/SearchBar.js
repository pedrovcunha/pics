import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };
  // Naming Conventions - on (or handle) + name of the element (input in this case) + the event we are watching for (change)
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment"> 
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
