import s from './ImageGallery.module.css';
// import { PropTypes } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ openModal }) {
  return (
    <ul className={s.imageGallery}>
      <ImageGalleryItem openModal={openModal} />
    </ul>
  );
}
