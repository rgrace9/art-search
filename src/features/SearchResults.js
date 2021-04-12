import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import {color} from 'styles/color';
import {device} from 'utils/device';

const {
  cream, darkBrown
} = color;
const StyledList = styled.ul`
  list-style-type: none;
  font-family: 'Amiri', serif;

`
const StyledItem = styled.li`
  display: flex;
  align-items: row;
  flex-wrap: wrap;
  background-color: #926E43;
  padding: 20px 20px;
  margin-bottom: 20px;
  color: ${darkBrown};
  /* box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);  */
  line-height: 1.5rem;
  position: relative;
  border: 4px solid transparent;
  border-radius: 8px;
  &:hover {
    /* box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);  */
    border: 4px solid ${cream};
  }
  &:focus-within {
    /* box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.5);  */
    border: 4px solid ${cream};

  }
`
const StyledImage = styled.img`
    width: 150px;
  height: 150px;
  object-fit: cover;
`

const StyledLink = styled.a`
  color: ${darkBrown};
  font-size: 1.6rem;
  line-height: 1;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  &:focus {
    outline: none;
  }
`

const StyledImageContainer = styled.div`
  padding-right: 10px;
`

const StyledTitle = styled.h2`
  /* width: 100%;
  @media ${device.laptop} { 
    max-width: 150px;

    } */

`

const StyledDescriptionContainer = styled.div`
    width: 100%;
    p {
      font-size: 1.4rem;
    }
  @media ${device.laptop} { 
    width: 70%;

    }
`

const SearchResults = props => {
  const {data, loading, count} = props; 
  if (loading) {
    return (
      <section aria-live="polite" aria-busy="true">
        <p>LOADING...</p> 
      </section>
    )
  }
  return (
    <section aria-live="polite" aria-busy="false">
      <div role='status'>
        <p>{count || 'No'} Search {`Result${count !== 1 ? 's' : ''}`}</p>
      </div>
      <StyledList role='list'>
        {data.map(d => (
          <StyledItem key={d.objectID}>
            <StyledImageContainer>
              <StyledImage alt='' src={d.primaryImageSmall}/>
            </StyledImageContainer>
            <StyledDescriptionContainer>
            <StyledTitle>
              <Link href={`/search/${d.objectID}`}>
                <StyledLink href={`/search/${d.objectID}`}>
                {d.title}
                </StyledLink>
              </Link>
              </StyledTitle>
            {d.artistDisplayName && <p>Artist: {d.artistDisplayName}</p> }
            
            <p>Date: {d.objectDate}</p>
            <p>Department: {d.department}</p>
            </StyledDescriptionContainer>
          </StyledItem>
        ))}
      </StyledList>
    </section>
  );
};

SearchResults.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  count: PropTypes.number
};

SearchResults.defaultProps = {
  data: [],
  loading: false,
  count: 0
}

export default SearchResults;