import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {device} from 'utils/device';
import {color} from 'styles/color';

const StyledCardContainer = styled.div`
    background: ${color.taupe};
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 20px;
  border-radius: 16px;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);
  text-align: center;
  -webkit-transition: transform 0.6s;
  transform-style: preserve-3d;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  position: relative;
transition: transform 0.6s;
  -webkit-transition: transform 0.6s;
  min-height: 200px;
  @media ${device.tablet} {
  
  width: 20%;

}
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
`

const StyledCardContent = styled.div`
  min-height: 190px;
  /* position: relative; */

`
const StyledFlipButton = styled.button`
  transform: rotateY(360deg);
  position:absolute;
  bottom:0;
  right:0;

`

const StyledFrontButton = styled.button`
  position:absolute;
  bottom:0;
  right:0;
`
const FlipCard = props => {
  const {data} = props;
  const cardElement = useRef(null)
  const url = `https://en.wikipedia.org/?curid=${data.pageid}`;

  const handleFlip = () => {
    console.log({cardElement})
    console.log(cardElement.current)
    cardElement.current.classList.toggle("flip")
  }
  

  return (
    <StyledCardContainer ref={cardElement}>
        <StyledFront className='card--front'>
      <StyledCardContent>
        <h3 className="result-title">
          <a href={url} target="_blank" rel="noopener">{data.title}</a>
        </h3>
          <StyledFrontButton onClick={handleFlip}>Flip</StyledFrontButton>
      </StyledCardContent>
        </StyledFront>
        <StyledBack className='card--back'>
        <StyledCardContent>
        <StyledFlipButton onClick={handleFlip}>Flip</StyledFlipButton> 
        </StyledCardContent>
        </StyledBack>
    </StyledCardContainer>
  );
};

FlipCard.propTypes = {
  
};

export default FlipCard;