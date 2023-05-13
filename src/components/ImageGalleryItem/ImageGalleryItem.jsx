import React from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ item }) => {
  return (
    <li class="gallery-item">
      <img src={item.webformatURL} alt={item.tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.string,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
