import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {device} from 'utils/device';
const StyledContainer = styled.section`
    margin: 0 40px;
    max-width: 940px;
  @media ${device.laptop} { 
    margin: 0 auto;

    }
  @media ${device.desktop} {
    
    margin: 0 auto;
  }

`

const Container = props => {
  const {children} = props;
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};

Container.propTypes = {
  
};

export default Container;