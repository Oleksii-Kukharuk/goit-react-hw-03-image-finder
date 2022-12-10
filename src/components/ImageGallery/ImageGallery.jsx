import { Component } from 'react';

const API_KEY = 'key=30638749-d35f41ebb6e3ac5e796b8db8e';
const API_URL = 'https://pixabay.com/api/?';
const DEFAULT_OPTIONS = 'image_type=photo&orientation=horizontal&per_page=12';
export class ImageGallery extends Component {
  state = {
    page: 1,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      fetch(
        `${API_URL}q=${this.props.searchQuery}&page=${this.state.page}&${API_KEY}&${DEFAULT_OPTIONS}`
      );
    }
  }

  render() {
    return (
      <ul className="gallery">
        <li></li>
      </ul>
    );
  }
}
