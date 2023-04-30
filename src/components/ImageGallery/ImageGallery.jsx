import { Component } from 'react';

import s from './ImageGallery.module.css';
import getImages from 'helpers/cardsAPI';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.page !== this.props.page ||
      prevProps.query !== this.props.query
    ) {
      console.log(this.props.query);
      const query = this.props.query;
      const page = this.state.page;
      if (prevProps.query !== this.props.query) {
        this.setState({ images: [], page: 1 });
      }
      this.setState({ isLoading: true });
      console.log(this.state.isLoading);
      try {
        const response = await getImages(query, page);
        this.setState(prev => ({
          images: [...prev.images, ...response.hits],
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  loadMore = () => {
    this.state.page += 1;
    // this.setState(prev => ({ page: prev.page + 1 }));
    console.log(this.state.page);
    this.props.setPage(this.state.page);
    console.log(this.props.page);
  };
  render() {
    const { images, error, isLoading } = this.state;
    return (
      <div>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader />}
        {images.length > 0 && (
          <div>
            <ul className={s.imageGallery}>
              <ImageGalleryItem
                images={images}
                openModal={this.props.openModal}
              />
            </ul>
          </div>
        )}

        {images.length >= 12 &&
          (isLoading ? <Loader /> : <Button loadMore={this.loadMore} />)}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func,
  openModal: PropTypes.func,
};