import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { getImeges } from 'components/Api/Api';
import { GalleryList } from './ImageGallery.styled';
import { Vortex } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export class ImageGallery extends Component {
  state = {
    page: 1,
    data: [],
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevProps) {
    const { searchQuery } = this.props;
    const { page } = this.state;

    if (prevProps.searchQuery !== searchQuery) {
      this.setState({ isLoading: true });
      try {
        const data = await getImeges(searchQuery, page);
        this.setState({ data });
      } catch (error) {
        this.setState({ error: 'от халепа, додаток впав' });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  dataShering() {}

  render() {
    const { error, isLoading } = this.state;
    return (
      <GalleryList className="gallery">
        {this.state.data.map(({ webformatURL, largeImageURL, id }) => {
          return (
            <ImageGalleryItem
              key={id}
              smallImg={webformatURL}
              bigImg={largeImageURL}
            ></ImageGalleryItem>
          );
        })}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {isLoading && (
          <Vortex
            visible={true}
            height="300"
            width="300"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['yellow', 'blue', 'yellow', 'blue', 'blue', 'yellow']}
          />
        )}
      </GalleryList>
    );
  }
}
