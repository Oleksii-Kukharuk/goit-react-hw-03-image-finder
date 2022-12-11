import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = 'key=30638749-d35f41ebb6e3ac5e796b8db8e';
const DEFAULT_OPTIONS = 'image_type=photo&orientation=horizontal&per_page=12';

export async function getImeges(searchQuery, page) {
  const { data } = await axios.get(
    `?q=${searchQuery}&page=${page}&${API_KEY}&${DEFAULT_OPTIONS}`
  );
  return data;
}
