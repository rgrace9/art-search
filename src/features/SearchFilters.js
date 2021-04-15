import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {color} from 'styles/color';
import {device} from 'utils/device';
import {amiri} from 'styles/font';
import {
  Listbox,
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from "@reach/listbox";
import "@reach/listbox/styles.css";
import {DEPARTMENTS_LIST} from 'constants/departmentsList';
import {searchTextState, departmentState} from 'states/queryState';
import {useRecoilState} from 'recoil';


const StyledLabel = styled.label`
    font-family: ${amiri};
  font-size: 1.2rem !important;
  color: ${color.lightCream};
  padding-top: 20px;
`

const StyledContainer = styled.section`
  background-color: ${color.maroon};
padding: 20px;
h2 {
  font-family: ${amiri};
  color: ${color.lightCream};
  font-size: 1.8rem;
  font-weight: 400;
}
`
const StyledForm = styled.form`

  [data-reach-listbox-input] {
    background-color: white;
    width: 100%;
    border-radius: 4px;
    @media ${device.tablet} { 
    width: 400px;
    } 

    

  }
  [data-reach-listbox-option] {
    min-height: 20px;
  font-family: ${amiri};
  font-size: 1.2rem !important;
  
  }

  .search-filter__option {
    min-height: 20px;
  font-family: ${amiri};
  font-size: 1.2rem;
  color: purple;
  }
[data-reach-listbox-input][data-state="idle"] {
  width: 100%;
  /* border-radius: 4px; */

}
[data-reach-listbox-input][data-value="VALUE_REF"] {
  width: 100%;
  border-radius: 4px;
}
[data-reach-listbox-button] {
  width: 100%;
  min-height: 20px;
  font-family: ${amiri};
  font-size: 1.2rem;
  border-radius: 4px;
}

[data-reach-listbox-arrow]  {
  margin-left: auto;
}
`

const StyledSearchText = styled.input`
  width: 100%;
  line-height: 1.5;
  font-family: ${amiri};
  font-size: 1.4rem;
  margin-bottom: 20px;
  padding: 0.5em 1.0em;
  -webkit-transition: .18s ease-out;
  -moz-transition: .18s ease-out;
  -o-transition: .18s ease-out;
  transition: .18s ease-out;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #d1d1d1;
  box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.07);

  
  &:focus {
  
  border: 1px solid #B8B6B6;
  box-shadow:  0px 0px 8px rgba(0, 0, 0, 0.2);
}
`

const StyledButton = styled.button`
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
  border-radius: 4px;
  font-family: ${amiri};
  font-size: 1.4rem;
  margin-top: 20px;
  padding: 2px 48px;
  background: white;
`

const SearchFilters = props => {
  const [query, setQuery] = useRecoilState(searchTextState);
  const [departmentId, setDepartmentId] = useRecoilState(departmentState)

  const onDepartmentChange = (val) => {
    setDepartmentId(val)
  }

  const onInputChange = (e) => {
    setQuery(e.target.value)
  }


  return (
    <StyledContainer>
      <h2>Search Filters</h2>
      <StyledForm role='search'>
        <StyledLabel htmlFor='text'>Query

        </StyledLabel>
        <StyledSearchText onChange={onInputChange} value={query} placeholder='e.g. Caravaggio, dresses, jewelry, roses' id='text' name='q'/>

        <StyledLabel htmlFor='departmentId'>Department

  </StyledLabel>
  <Listbox value={departmentId} id="departmentId" name='departmentId' onChange={onDepartmentChange}>
    {DEPARTMENTS_LIST.map(d => (
      <ListboxOption style={{fontSize: '1.2rem', fontFamily: `${amiri}`}} className='search-filter__option' key={d.departmentId} value={d.departmentId}>{d.displayName}</ListboxOption>
    ))}

      </Listbox>
      <StyledButton type='submit'>Search</StyledButton>
      </StyledForm>

    </StyledContainer>
  );
};

SearchFilters.propTypes = {
  
};

export default SearchFilters;