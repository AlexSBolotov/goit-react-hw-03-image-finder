import { Component } from 'react';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }
  handleKeydown = e => {
    if (e.code === 'Escape') this.props.closeModal();
  };
  handleBackdropClick = e => {
    if (e.target === e.currentTarget) this.props.closeModal();
  };
  render() {
    return createPortal(
      <div onClick={this.handleBackdropClick} className={s.overlay}>
        <div className={s.modal}>
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
