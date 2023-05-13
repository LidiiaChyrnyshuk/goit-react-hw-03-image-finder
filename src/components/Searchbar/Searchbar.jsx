import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.currentTarget.value.trim().toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (!value) {
      this.setState({ value: '' });
      alert('Enter a search query!');
      return;
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <header class="searchbar">
        <form class="form" autoComplete="off" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            onChange={this.handleChange}
            value={this.state.value}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
