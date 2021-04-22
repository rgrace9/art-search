import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {device} from 'utils/device';
const StyledContainer = styled.section`
    margin: 20px 40px;
    max-width: 940px;
  @media ${device.laptop} { 
    margin: 20px auto;

    }
  @media ${device.desktop} {
    
    margin: 20px auto;
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