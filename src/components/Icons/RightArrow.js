import React from 'react';
import PropTypes from 'prop-types';

const RightArrow = (props) => {
  const {height, width} = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}><path d="M14 18l10-7.088L14 4v3.042S2.382 9.625 0 20c5.072-5.431 14-5.218 14-5.218V18z"/></svg>
  );
};

RightArrow.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string
};

RightArrow.defaultProps = {
  height: '24',
  width: '24'
}
export default RightArrow;