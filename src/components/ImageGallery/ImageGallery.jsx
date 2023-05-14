import React from 'react';
// import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ items }) => {
  console.log(items);
  return (
    <ul className={css.ImageGallery}>
      {items.map(item => {
        return <ImageGalleryItem key={item.id} itemdata={item} />;
      })}
    </ul>
  );
};

// ImageGallery.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };
