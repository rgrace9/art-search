import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {device} from 'utils/device';
import Container from '../Container'
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  perspective: 1000px;
  justify-content: center;
  align-content: center;
  align-items: center;
  @media ${device.tablet} {
    flex-wrap: wrap;
    display: flex;
    margin-left: -10px;
    margin-right: -10px;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    position: relative;
    perspective: 1000px;
    align-items: stretch;
  
  }

  .flip {
    background-color: pink;
    transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  }
`
const FlipCardsContainer = props => {
  const {children} = props;
  return (
   
      <StyledContainer>
        {children}
      </StyledContainer>
  
  );
};

FlipCardsContainer.propTypes = {
  
};

export default FlipCardsContainer;