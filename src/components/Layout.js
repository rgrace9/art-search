import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const StyledLayout = styled.div`
  min-height: 100vh;
  /* padding: 0 0.5rem; */
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`;
const Layout = props => {
  const { pageTitle, children } = props;
  return (
    <StyledLayout>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </StyledLayout>
  );
};

export default Layout;

Layout.defaultProps = {
  pageTitle: 'Museum Search',
};

Layout.propTypes = {
  pageTitle: PropTypes.string,
};
