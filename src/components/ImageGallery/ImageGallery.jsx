import s from './ImageGallery.module.css';
// import { PropTypes } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery() {
  return (
    <ul className={s.imageGallery}>
      <ImageGalleryItem />
    </ul>
  );
}
