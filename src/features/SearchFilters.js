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

const DEPARTMENTS_LIST = [
  {
    "departmentId": 'default',
    "displayName": "All Departments"
  },
  {
    "departmentId": 1,
    "displayName": "American Decorative Arts"
  },
  {
    "departmentId": 3,
    "displayName": "Ancient Near Eastern Art"
  },
  {
    "departmentId": 4,
    "displayName": "Arms and Armor"
  },
  {
    "departmentId": 5,
    "displayName": "Arts of Africa, Oceania, and the Americas"
  },
  {
    "departmentId": 6,
    "displayName": "Asian Art"
  },
  {
    "departmentId": 7,
    "displayName": "The Cloisters"
  },
  {
    "departmentId": 8,
    "displayName": "The Costume Institute"
  },
  {
    "departmentId": 9,
    "displayName": "Drawings and Prints"
  },
  {
    "departmentId": 10,
    "displayName": "Egyptian Art"
  },
  {
    "departmentId": 11,
    "displayName": "European Paintings"
  },
  {
    "departmentId": 12,
    "displayName": "European Sculpture and Decorative Arts"
  },
  {
    "departmentId": 13,
    "displayName": "Greek and Roman Art"
  },
  {
    "departmentId": 14,
    "displayName": "Islamic Art"
  },
  {
    "departmentId": 15,
    "displayName": "The Robert Lehman Collection"
  },
  {
    "departmentId": 16,
    "displayName": "The Libraries"
  },
  {
    "departmentId": 17,
    "displayName": "Medieval Art"
  },
  {
    "departmentId": 18,
    "displayName": "Musical Instruments"
  },
  {
    "departmentId": 19,
    "displayName": "Photographs"
  },
  {
    "departmentId": 21,
    "displayName": "Modern Art"
  }
]

const StyledForm = styled.form`
  [data-reach-listbox-input] {
    background-color: white;
    width: 100%;
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

}
[data-reach-listbox-input][data-value="VALUE_REF"] {
  width: 100%;

}
[data-reach-listbox-button] {
  width: 100%;
  min-height: 20px;
  font-family: ${amiri};
  font-size: 1.2rem;
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
  padding: 2px;
  outline: none;
  padding: 0.6em 1.45em 0.7em;
  -webkit-transition: .18s ease-out;
  -moz-transition: .18s ease-out;
  -o-transition: .18s ease-out;
  transition: .18s ease-out;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #d1d1d1;
  box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.07);

  
  &:focus {
  color: #4b515d;
  border: 1px solid #B8B6B6;
  box-shadow:  0px 0px 8px rgba(0, 0, 0, 0.2);
}
`

const SearchFilters = props => {

  const [departmentValue, setDepartmentValue] = React.useState('default');


  const onDepartmentChange = (val) => {
    setDepartmentValue(val)
  }
  return (
    <StyledForm role='search'>
      <label htmlFor='text'>Search

      </label>
      <StyledSearchText id='text' name='text'/>

      <label htmlFor='department'>Department

</label>
<Listbox defaultValue='default' id="department" name='department' value={departmentValue} onChange={onDepartmentChange}>
  {DEPARTMENTS_LIST.map(d => (
    <ListboxOption style={{fontSize: '1.2rem', fontFamily: `${amiri}`}} className='search-filter__option' key={d.departmentId} value={d.departmentId}>{d.displayName}</ListboxOption>
  ))}

    </Listbox>
    
    </StyledForm>
  );
};

SearchFilters.propTypes = {
  
};

export default SearchFilters;