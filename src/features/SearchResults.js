import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;
  font-family: 'Amiri', serif;

`
const StyledItem = styled.li`
  display: flex;
  align-items: row;
  background-color: #926E43;
  padding: 20px 20px;
  margin-bottom: 20px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5); 
  line-height: 1.5rem;
`
const StyledImage = styled.img`
    width: 150px;
  height: 150px;
  object-fit: cover;
`

const StyledImageContainer = styled.div`
  padding-right: 10px;
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
              <StyledImage alt={d.title} src={d.primaryImageSmall}/>
            </StyledImageContainer>
            <div>
            <h2>{d.title}</h2>
            {d.artistDisplayName && <p>Artist: {d.artistDisplayName}</p> }
            
            <p>Date: {d.objectDate}</p>
            <p>Department: {d.department}</p>
            </div>
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