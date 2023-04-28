import s from './ImageGalleryItem.module.css';
// import { PropTypes } from 'react'

export default function ImageGalleryItem() {
  return (
    <li className={s.imageGalleryItem}>
      <img className={s.imageGalleryItemImage} src="" alt="" />
    </li>
  );
}
