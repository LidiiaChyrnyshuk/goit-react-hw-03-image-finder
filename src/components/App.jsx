import React, { Component } from 'react';
import * as PixabayAPI from '../components/services/pixabarApi';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import css from './App.module.css';

export class App extends Component {
  state = {
    value: '',
    page: 1,
    items: [],
    showBtn: false,
    isEmpty: false,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { value, page } = this.state;

    if (prevState.value !== value || prevState.page !== page) {
      this.setState({ isLoading: true });

      PixabayAPI.fetchPhotos(value, page)
        .then(({ items, total_results }) => {
          console.log(value);
          if (!items.length) {
            this.setState({ isEmpty: true });
            return;
          }

          this.setState(prevState => ({
            items: [...prevState.items, ...items],
            showBtn: page < Math.ceil(total_results / 12),
          }));
        })
        .catch(error => {
          this.setState({ error: error.message });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleSubmit = value => {
    this.setState({
      value,
      page: 1,
      items: [],
      showBtn: false,
      isEmpty: false,
      isLoading: false,
      error: null,
    });
  };

  handleButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery items={this.state.items} />

        {this.state.showBtn && (
          <Button type="button" onClick={this.handleButton}>
            Load more
          </Button>
        )}

        {this.state.isLoading && <Loader />}

        {this.state.error && (
          <p styles={{ textAlign: 'center' }}>Sorry. {this.state.error}</p>
        )}
      </div>
    );
  }
}
