import React from 'react';
import styled from 'styled-components';
import {Search} from 'components/Icons'


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
  /* background-color: hsla(0, 25%, 100%, 0.30); */
  background-color: hsla(0, 0%, 100%, 0.55);
  padding: 20px 40px;
  width: 75%;
`

const StyledInput = styled.input`
  width: 100%;
  /* height: 76px; */
  /* line-height: 76px; */
  border: 1px solid transparent;
  /* background: rgba(0, 0, 0, 0.8); */
  background: transparent;
  font-size: 27px;
  padding: 5px;
  color: #fff;
  position: relative;
  border-radius: 0;
  outline: none;
  &:focus {
    border-radius: 0;
    box-shadow: 0 0 0 2pt #46a340;
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
  /* background: rgba(0, 0, 0, 0.8); */
  background-color: rgb(19,10,0);
  background-color: #130A00;
  padding: 10px;
`

const StyledButton = styled.button`
    /* position: absolute; */
  top: 6px;
  right: 6px;
  color: #fff;
  background: transparent;
  padding: 5;
  border: 0;
  margin: 5px;
  border-radius: 0;
  outline: none;
  &:focus {
    border-radius: 0;
    box-shadow: 0 0 0 2pt #46a340;
  }

`
const SearchHero = () => {
  return (
    
    <StyledHero>
        <StyledHeroContent>
        <StyledForm>
          <StyledLabel htmlFor='search'>Search</StyledLabel>
            <StyledInput id='search' name='search' type="text" placeholder="Search by keyword" />
            <StyledButton aria-label='Search' type="submit"><Search /></StyledButton>
          </StyledForm>
     </StyledHeroContent>
      </StyledHero>
    
  );
};

export default SearchHero;
