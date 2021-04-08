import React from 'react';
import styled from 'styled-components';

const StyledHeroContainer = styled.section`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 600px;

`

const StyledHero = styled.div`
  background-image: url('/images/denial-of-saint-peter.jpeg');
  /* background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  /* height: 50%; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  /* height: 50vh; */
  height: 75vh;
  /* height: 600px; */
`
const SearchHero = () => {
  return (
    // <StyledHeroContainer>

      <StyledHero>
        <p>hey</p>
      </StyledHero>
    // </StyledHeroContainer>
    
  );
};

export default SearchHero;
