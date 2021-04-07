import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 20px 20px;
  background-color: #78745b;
`;
const Header = props => {
  return (
    <StyledHeader>
      <Link href="/">
        <a>Met Museum Search</a>
      </Link>
    </StyledHeader>
  );
};

Header.propTypes = {};

export default Header;
