import axios from 'axios';

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '34848340-3921ebdedd421f5516455587c';

  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 12;
  }

  async fetchPhotos() {
    const searchParams = new URLSearchParams({
      key: this.#API_KEY,
      q: this.query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: this.perPage,
      page: this.page,
    });

    const response = await axios.get(`${this.#BASE_URL}?${searchParams}`);

    return response.data;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
