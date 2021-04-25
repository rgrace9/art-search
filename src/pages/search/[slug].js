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
import Head from 'next/head';
import {truncateString} from 'utils/truncateString';

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

const StyledLink = styled.a`
  text-decoration: underline;
  color: ${color.darkBrown};
  
`
const SearchResult = props => {
  const {data} = props;
  const [wikiResults, setWikiResults] = useState([]);
  const [numberTimesFetched, setNumberTimesFetched] = useState(0);

  async function searchWikipedia(searchQuery) {
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
    try {
      const {data} = await axios.get(endpoint);
        
     return data.query.search
  
      
   
    } catch(err) {

      throw err;
    }
 
  }

  const getValue = async (queryString) => {
    setNumberTimesFetched(prevState => prevState + 1)
    const res = await Promise.resolve(searchWikipedia(queryString));
    // displayWikiResults(res)
    if (!res.length && data.artistAlphaSort && numberTimesFetched < 3) {
      getValue(data.artistAlphaSort)
    }
    setWikiResults(res)
  }

  useEffect(() => {
    if (data.objectID) {
  
      const updatedTitle = truncateString(data.title, 20)
      const searchValue = data.artistAlphaSort ? `${data.artistAlphaSort} ${updatedTitle}` : `${updatedTitle} ${data.department}`;
      if (searchValue) {
        // getValue(data.artistAlphaSort)
        getValue(searchValue)
      }
    
    }

  }, [data.objectID, data.title])
  if (props.error) {
    return <h1>Object cannot be found</h1>
  }


  return (
    <Layout pageTitle={data.title}>
           <Head>
     
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={data.primaryImageSmall} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200"></meta>

      </Head>
            <GlobalStyle lightBackgroundColor />
            <main>
              <Container>
                <StyledHeading>{data.title}</StyledHeading>
                <div>
                  <StyledSubHeading>Details</StyledSubHeading>
                {data.artistDisplayName && <StyledText><b>Artist:</b> {data.artistDisplayName}</StyledText> }
            
            <StyledText><b>Date:</b> {data.objectDate}</StyledText>
            <StyledText><b>Department:</b> {data.department}</StyledText>
            <StyledText><b>Dimensions:</b> {data.dimensions}</StyledText>
            <StyledText><b>Medium:</b> {data.medium}</StyledText>
            <StyledText>Click <StyledLink href={data.objectURL} target='_blank'>here</StyledLink> to learn more from the Metropolitan Museum.</StyledText>
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