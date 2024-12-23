import PropTypes from 'prop-types';
import styles from  "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={styles.img_wrapper} onClick={onClick}>
      <img className={styles.images} src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired, // Validate the image object structure
  onClick: PropTypes.func, // Validate that onClick is a function
};

export default ImageCard;