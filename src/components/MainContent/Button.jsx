
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button
      className="px-4 py-2 h-12 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      onClick={onClick}
    >
      Send
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
