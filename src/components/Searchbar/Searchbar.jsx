import React from 'react';

export class Searchbar extends React.Component {
  state = {
    querySearch: '',
  };

  onInputChange = e => {
    this.setState({ querySearch: e.target.value.toLowerCase() });
    console.log(this.state.querySearch);
  };

  onInputSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.querySearch);

    // this.setState({ querySearch: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onInputSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}
