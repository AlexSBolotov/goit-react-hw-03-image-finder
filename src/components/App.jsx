import { Component } from 'react';
import s from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  render() {
    return (
      <main className={s.app}>
        <Searchbar />
        <ImageGallery />
        <Button />
      </main>
    );
  }
}
