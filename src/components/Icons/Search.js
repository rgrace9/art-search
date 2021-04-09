import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
  const {height, width} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
    >
      <path
        d="M19.427 20.427A8.46 8.46 0 0 1 14.5 22a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 8.5 8.5c0 2.347-.951 4.472-2.49 6.01l5.997 5.997a.7.7 0 0 1-1 1l-6.081-6.081h0zM14.5 21a7.5 7.5 0 1 0 0-15 7.5 7.5 0 1 0 0 15h0z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

Search.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string
};

Search.defaultProps = {
  height: '32',
  width: '32'
}

export default Search;