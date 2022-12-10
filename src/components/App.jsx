import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';

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
        <ImageGallery searchQuery={this.state.search} />
        <ToastContainer autoClose={4000} />
      </>
    );
  }
}
