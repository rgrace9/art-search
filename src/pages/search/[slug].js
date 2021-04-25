import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {getObject} from './index';
import Layout from 'components/Layout';
import {GlobalStyle} from 'pages/_app';
import Container from 'components/Container';
import axios from 'axios';
import {color} from 'styles/color';
import {amiri} from 'styles/font';
import {INITIAL_OBJECT_STATE} from 'constants/defaultObjectValue';
import styled from 'styled-components';
import {  FlipCard, FlipCardsContainer } from 'components/FlipCards';

const StyledWikiResultsContainer = styled.ul`
    padding-left: 20px;
    padding-right: 20px;
    list-style-type: none;
    font-family: ${amiri};
    font-size: 1.2rem;
  .result-item {
    margin-bottom: 20px;
  }
`

const StyledHeading = styled.h1`
  font-size: 1.6rem;
`

const StyledSubHeading = styled.h2`
  font-size: 1.4rem;
  font-style: italic;
`

const StyledText = styled.p`
  font-size: 1.4rem;
`

const StyledHeading4 = styled.h4`

`
const SearchResult = props => {
  const {data} = props;
  const [wikiResults, setWikiResults] = useState([]);

  // console.log(data)
  async function searchWikipedia(searchQuery) {
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
    try {
      const {data} = await axios.get(endpoint);
      console.log(data)
      // return []
      
     return data.query.search
  
      
   
    } catch(err) {

      throw err;
    }
 
  }

  const getValue = async (queryString) => {
        
    const res = await Promise.resolve(searchWikipedia(queryString));
    // displayWikiResults(res)
    setWikiResults(res)
  }

  useEffect(() => {
    if (data.objectID) {
      console.log(data)
      const searchValue = data.artistAlphaSort ? data.artistAlphaSort : `${data.title} ${data.department}`;
      // const searchValue = `${data.artistAlphaSort}  ${data.title} ${data.department}`;
      if (searchValue) {
        getValue(searchValue)
      }
    
    }

  }, [data.objectID, data.title])
  if (props.error) {
    return <h1>Object cannot be found</h1>
  }


  const displayWikiResults = (results) => {
    results.forEach(result => {
      const url = `https://en.wikipedia.org/?curid=${result.pageid}`;

      // const searchResults = document.querySelector('.js-search-results');

      // Append the search result to the DOM
      // searchResults.insertAdjacentHTML(
      //   'beforeend',
      //   `<li class="result-item">
      //     <h3 class="result-title">
      //       <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
      //     </h3>
      //     <span class="result-snippet">${result.snippet}...</span><br>
      //   </li>`
      // );
    })

  }

  return (
    <Layout pageTitle={data.title}>
            <GlobalStyle lightBackgroundColor />
            <main>
              <Container>
                <StyledHeading>{data.title}</StyledHeading>
                <div>
                  <StyledSubHeading>Details</StyledSubHeading>
                {data.artistDisplayName && <StyledText>Artist: {data.artistDisplayName}</StyledText> }
            
            <StyledText>Date: {data.objectDate}</StyledText>
            <StyledText>Department: {data.department}</StyledText>
                </div>
              </Container>
              <Container>
                <StyledSubHeading>Related Wikipedia Resources</StyledSubHeading>
                {wikiResults.length ? (
                                  <FlipCardsContainer>
                                  {wikiResults.map(res => (
                                    <FlipCard key={res.pageid} data={res} />
                                  ))}
                                </FlipCardsContainer>
                ) : (
                  <StyledText>No Related Were Articles Found.</StyledText>
                )}

              </Container>
            </main>
    </Layout>
  );
};

SearchResult.propTypes = {
  
};

export default SearchResult;

export async function getServerSideProps(context) {
  const {query} = context;
  if (query && query.slug) {
    const res = await getObject(query.slug)
    return {
      props: {
        data: {
          ...INITIAL_OBJECT_STATE,
          ...res
        }
      }
    }
  }
  return {
    props: {
      error: true,
      data: INITIAL_OBJECT_STATE
    }
  }
}