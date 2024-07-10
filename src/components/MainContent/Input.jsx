import PropTypes from 'prop-types';

const Input = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex-1">
      <input
        className="w-c1080 h-12 px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="Enter URL Or Paste"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
