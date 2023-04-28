import s from './ImageGalleryItem.module.css';
// import { PropTypes } from 'react'

export default function ImageGalleryItem({ openModal }) {
  return (
    <li className={s.imageGalleryItem}>
      <img
        onClick={openModal}
        className={s.imageGalleryItemImage}
        src=""
        alt=""
      />
    </li>
  );
}
