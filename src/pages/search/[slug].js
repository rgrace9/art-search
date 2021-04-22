import React from 'react';
import PropTypes from 'prop-types';
import {getObject} from './index';
import Layout from 'components/Layout';
import {GlobalStyle} from 'pages/_app';
import Container from 'components/Container';

import {INITIAL_OBJECT_STATE} from 'constants/defaultObjectValue';
const SearchResult = props => {
  const {data} = props;
  if (props.error) {
    return <h1>Object cannot be found</h1>
  }
  return (
    <Layout pageTitle={data.title}>
            <GlobalStyle lightBackgroundColor />
            <main>
              <Container>
                <h1>{data.title}</h1>
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