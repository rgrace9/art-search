import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {device} from 'utils/device';
import Container from '../Container'
const StyledContainer = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  perspective: 1000px;
  /* justify-content: center; */
  align-content: center;
  align-items: center;
  width: 100%;
  @media ${device.tablet} {
    flex-wrap: wrap;
    display: flex;

    flex-direction: row;
    
    align-content: center;
    position: relative;
    perspective: 2000px;
    align-items: stretch;
    margin: 0;
  padding: 0;
  /* margin-left: -10px;
    margin-right: -10px; */
  }

  .flip {
    transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  }
`
const FlipCardsContainer = props => {
  const {children} = props;
  return (
   
      <StyledContainer role='list'>
        {children}
      </StyledContainer>
  
  );
};

FlipCardsContainer.propTypes = {
  
};

export default FlipCardsContainer;