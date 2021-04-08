import React from 'react';
import styled from 'styled-components';



const StyledHero = styled.div`
  background-image: url('/images/denial-of-saint-peter.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  /* height: 50vh; */
  height: 75vh;
  /* height: 600px; */
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledHeroContent = styled.section`

  margin: auto;
  background-color: hsla(0, 25%, 100%, 0.30);
  padding: 20px 40px;
  width: 75%;

`
const SearchHero = () => {
  return (
    
    <StyledHero>
        <StyledHeroContent>
        <p style={{color: 'black', fontSize: '36px'}}>Search Bar</p>
     </StyledHeroContent>
      </StyledHero>
    
  );
};

export default SearchHero;
