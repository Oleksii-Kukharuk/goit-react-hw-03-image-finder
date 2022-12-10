import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    search: '',
  };

  onFormSubmit = search => {
    this.setState({ search: search });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} />
      </>
    );
  }
}
