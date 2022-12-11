import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ContainerApp } from './App.styled';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    search: '',
    page: 1,
    pages: 0,
    modal: false,
  };

  onSeachInfo = data => {
    console.log(data);
  };

  onFormSubmit = search => {
    this.setState({ search: search });
  };

  render() {
    const { page, pages, modal } = this.state;
    return (
      <ContainerApp>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery
          searchQuery={this.state.search}
          onChange={this.onSeachInfo}
        />
        {page < pages && <Button onClick={this.onSeachInfo}></Button>}
        <ToastContainer autoClose={4000} />
        {modal && <Modal />}
      </ContainerApp>
    );
  }
}
