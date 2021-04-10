import React, {useState} from 'react';
import styled from 'styled-components';
import {Search} from 'components/Icons'
import { useRouter } from 'next/router'


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
  /* background-color: hsla(0, 0%, 100%, 0.55); */
  /* background-color: rgba(119,116,91, 0.75); */
  background-color: #fdf8d6;
  padding: 20px 40px;
  width: 75%;
`

const StyledInput = styled.input`
  width: 100%;
  /* height: 76px; */
  /* line-height: 76px; */
  border: 1px solid transparent;
  font-family: 'Amiri', serif;
  font-weight: 400;
  background: transparent;
  font-size: 27px;
  padding: 5px;
  color: #fdf8d6;
  position: relative;
  border-radius: 0;
  outline: none;
  &:focus {
    border-radius: 0;
    box-shadow: 0 0 0 2pt #fdf8d6;
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
  color: #fdf8d6;
  background: transparent;
  padding: 5;
  border: 0;
  margin: 5px;
  border-radius: 0;
  outline: none;
  padding: 2px;
  &:focus {
    border-radius: 0;
    box-shadow: 0 0 0 2pt #fdf8d6;
  }

`
const SearchHero = () => {
  const [query, setQuery] = useState('');
  const router = useRouter()

  const onSearch = (e) => {
    e.preventDefault();
    if (query) {
   
      router.push({
        pathname: '/search',
        query: {q: query}
      })
    }
  }
  const onInputChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    
    <StyledHero>
        <StyledHeroContent>
        <StyledForm onSubmit={onSearch} role='search'>
          <StyledLabel htmlFor='search'>Search</StyledLabel>
            <StyledInput onChange={onInputChange} value={query} id='search' name='search' type="text" placeholder="Search" />
            <StyledButton aria-label='Submit Search' type="submit"><Search /></StyledButton>
          </StyledForm>
     </StyledHeroContent>
      </StyledHero>
    
  );
};


export default SearchHero;


