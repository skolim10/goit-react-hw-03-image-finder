import styles from './Button.module.css';
import propTypes from 'prop-types';

export const Button = ({ onClick }) => (
  <button type="button" className={styles.Button} onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
