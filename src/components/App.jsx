import { Component } from 'react';
import s from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    console.log(this.state.showModal);
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className={s.app}>
        <Searchbar />
        <ImageGallery openModal={this.toggleModal} />
        <Button />

        {showModal && <Modal closeModal={this.toggleModal} />}
      </div>
    );
  }
}
