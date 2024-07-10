import PropTypes from 'prop-types';

const ResponseDisplay = ({ response }) => {
  return (
    <div className="mt-4 max-w-full overflow-x-auto">
      <pre className="bg-gray-800 text-white p-4 rounded-md whitespace-pre-wrap break-words max-w-full">
        {JSON.stringify(response, null, 2)}
      </pre>
    </div>
  );
};

ResponseDisplay.propTypes = {
  response: PropTypes.any.isRequired,
};

export default ResponseDisplay;
