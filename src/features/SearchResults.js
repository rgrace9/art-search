import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import {color} from 'styles/color';
import {device} from 'utils/device';
import {amiri} from 'styles/font';
import Loading from 'components/Loading';
import {selectedObjectState} from 'states/selectedObject';
import {useRecoilState} from 'recoil';

const {
  cream, darkBrown
} = color;
const StyledList = styled.ul`
  list-style-type: none;
  font-family: ${amiri};

`
const StyledCount = styled.div`
padding: 16px 0px;
text-align: center;
  h2 {
  font-family: ${amiri};
  color: ${color.darkBrown};
  font-size: 1.8rem;
  font-weight: 400;
}
`

const StyledItem = styled.li`
  display: flex;
  align-items: row;
  flex-wrap: wrap;
  background-color: ${color.cream};
  padding: 20px 20px;
  margin-bottom: 20px;
  color: ${darkBrown};
  /* box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);  */
  line-height: 1.5rem;
  position: relative;
  border: 6px solid transparent;
  border-radius: 2px;
  box-shadow: 1px 1px 10px 1px #1F0A03;
 
  &:focus-within {
    /* box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.5);  */
    border: 6px solid ${darkBrown};

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
  
  const [selectedItem, setSelectedItem] = useRecoilState(selectedObjectState);

  const {data, loading, count} = props; 
  if (loading) {
    return (
      <section aria-live="polite" aria-busy="true">
        <Loading /> 
      </section>
    )
  }

  return (
    <section aria-live="polite" aria-busy="false">
      <StyledCount role='status'>
        <h2>{count || 'No'} Search {`Result${count !== 1 ? 's' : ''}`}</h2>
      </StyledCount>
      <StyledList role='list'>
        {data.map(d => (
          <StyledItem key={d.objectID}>
            <StyledImageContainer>
              <StyledImage alt='' src={d.primaryImageSmall}/>
            </StyledImageContainer>
            <StyledDescriptionContainer>
            <StyledTitle>
              <Link
                href={`/search/${d.objectID}`}
              >
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