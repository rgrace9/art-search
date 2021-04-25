import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {device} from 'utils/device';
import {color} from 'styles/color';
import {RightArrow} from '../Icons';
import {josefinSans} from 'styles/font';

const StyledCardContainer = styled.li`
    background: ${color.eunry};
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);
  text-align: center;
  -webkit-transition: transform 0.6s;
  transform-style: preserve-3d;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  position: relative;
transition: transform 0.6s;
  -webkit-transition: transform 0.6s;
  min-height: 300px;
  width: 100%;
  max-width: 300px;
  border: 2px solid ${color.navyBlue};
  padding: 1rem;
  @media ${device.tablet} {
  
  /* width: 25%; */
  /* max-width: 300px; */
width: 33.3333%;
}


  /* @media(min-width: 40rem) {
    width: 20%;
  }
  @media(min-width: 56rem) {
    width: 33.3333%;
  } */
.card--front,
.card--back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
}



`

const StyledFront = styled.div`
    height: 100%;
  transform: rotateX(0deg);
  -webkit-transform: rotateX(0deg);
  display: flex;
  align-items: center;
  justify-content: center;

`
const StyledBack = styled.div`
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  position: absolute;
  text-align: center;
  right: 0;
  left: 0;
  top: 10px;
  color: #20263f;
  visibility: hidden;
`

const StyledCardContent = styled.div`
  min-height: 290px;
  align-items: center;
  display: flex;
  /* position: relative; */

`

const StyledCardBackWrapper = styled.div`
  transform: rotateY(360deg);
  position:absolute;
  bottom:0;
  right:0;

`

const StyledFlipButton = styled.button`
  position:absolute;
  bottom:0;
  right:0;
  background-color: transparent;
  border: transparent;
  width: 40px;
  height: 40px;
`
const StyledFlipButtonBack = styled.button`
  position:absolute;
  bottom:0;
  right:0;
  background-color: transparent;
  border: transparent;
  width: 40px;
  height: 40px;
  transform: rotateY(180deg);
`

const StyledLink = styled.a`
  font-family: ${josefinSans};
  font-size: 1.6rem;
  color: ${color.darkBrown};
  text-decoration: underline;
`
const FlipCard = props => {
  const {data} = props;
  const cardElement = useRef(null);
  const cardBackElement = useRef(null);
  const url = `https://en.wikipedia.org/?curid=${data.pageid}`;

  const handleBackFlip = () => {
    cardElement.current.classList.toggle("flip")
    if (cardBackElement) {
      cardBackElement.current.style.visibility = 'hidden'; 
    }
  }

  const handleFrontFlip = () => {
    cardElement.current.classList.toggle("flip")
    if (cardBackElement) {
      cardBackElement.current.style.visibility = 'visible'; 
    }
  }
  

  return (
    <StyledCardContainer ref={cardElement}>
        <StyledFront className='card--front'>
      <StyledCardContent>
        <h3 className="result-title">
          <StyledLink href={url} target="_blank" rel="noopener">{data.title}</StyledLink>
        </h3>
          <StyledFlipButton aria-label='Flip Card' onClick={handleFrontFlip}><RightArrow /></StyledFlipButton>
      </StyledCardContent>
        </StyledFront>
        <StyledBack ref={cardBackElement} className='card--back'>
        <StyledCardContent>
          <StyledCardBackWrapper>
       
        <StyledFlipButtonBack ref={cardBackElement} aria-label='Flip Card' onClick={handleBackFlip}>
          <RightArrow />
          </StyledFlipButtonBack> 

          </StyledCardBackWrapper>
        </StyledCardContent>
        </StyledBack>
    </StyledCardContainer>
  );
};

FlipCard.propTypes = {
  
};

export default FlipCard;