import { Component } from 'react';
import axios from 'axios';
import { ImageItem } from 'components/ImageGalleryItem/ImageItem';

axios.defaults.baseURL = 'https://pixabay.com/api/?';
const API_KEY = 'key=30638749-d35f41ebb6e3ac5e796b8db8e';
const DEFAULT_OPTIONS = 'image_type=photo&orientation=horizontal&per_page=12';

export class ImageGallery extends Component {
  state = {
    page: 1,
    totalPages: 0,
    data: [],
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      const { searchQuery } = this.props;
      const { page } = this.state;

      const { data } = await axios.get(
        `/q=${searchQuery}&page=${page}&${API_KEY}&${DEFAULT_OPTIONS}`
      );
      this.setState({ data: data.hits });
    }
  }

  render() {
    return (
      <ul className="gallery">
        <ImageItem data={this.state.data}></ImageItem>
      </ul>
    );
  }
}
