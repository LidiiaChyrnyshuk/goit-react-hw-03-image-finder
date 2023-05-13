import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items }) => {
  return (
    <ul class="gallery">
      {items.map(item => {
        <ImageGalleryItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.array.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
