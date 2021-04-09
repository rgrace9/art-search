import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 20px 20px;
  background-color: #78745b;
  box-shadow: 0px 1px 5px #130d05;
`;

const StyledLink = styled.a`
  color: #fdf8d6;
  font-size: 1.6rem;
  padding: 2px 5px;
  font-family: 'Julius Sans One', sans-serif;
  outline: none;
  &:focus,
  &:hover {
    background-color: black;
    text-decoration: none;
    box-shadow: 0 0 0 2pt red;
  }
`;
const Header = props => {
  return (
    <StyledHeader>
      <Link href="/">
        <StyledLink href="/">Met Museum Search</StyledLink>
      </Link>
    </StyledHeader>
  );
};

Header.propTypes = {};

export default Header;
