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

const StyledInput = styled.input`
  width: 100%;
  /* height: 76px; */
  /* line-height: 76px; */
  border: 1px solid #111;
  background: rgba(0, 0, 0, 0.8);
  font-size: 27px;
  padding: 5px 5px 5px 47px;
  color: #fff;
  position: relative;
  border-radius: 0;
  outline: none;
  &:focus {
    border-radius: 0;
    box-shadow: 0 0 0 2pt red;
  }
`

const StyledLabel = styled.label`
  position:absolute;
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
`

const StyledButton = styled.button`
    /* position: absolute; */
  top: 6px;
  right: 6px;
  color: #fff;
  background: #88687b;
  font-size: 27px;
  /* height: 68px; */
  line-height: 68px;
  /* width: 68px; */
  padding: 0;
  border: 0;

`
const SearchHero = () => {
  return (
    
    <StyledHero>
        <StyledHeroContent>
        <StyledForm>
          <StyledLabel htmlFor='search'>Search</StyledLabel>
            <StyledInput id='search' name='search' type="text" placeholder="Search by keyword" />
            <StyledButton aria-label='Search' type="submit">Search</StyledButton>
          </StyledForm>
     </StyledHeroContent>
      </StyledHero>
    
  );
};

export default SearchHero;
