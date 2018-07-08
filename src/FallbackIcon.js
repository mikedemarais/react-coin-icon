import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/primitives';

const buildFallbackFontSize = ({ symbol }) => {
  if (!symbol) return 0;
  else if (symbol.length > 4) return 9;
  else if (symbol.length === 4) return 11;
  return 13;
};

const Container = styled.View`
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Text = styled.Text`
  color: #ffffff;
  font-size: ${buildFallbackFontSize}px;
  font-weight: 600;
  ${({ textStyles}) => textStyles}
`;

const FallbackIcon = ({ symbol, textStyles, ...props }) => (
  <Container {...props}>
    <Text symbol={symbol} textStyles={textStyles}>
      {symbol ? symbol.toUpperCase() : null}
    </Text>
  </Container>
);

FallbackIcon.propTypes = {
  bgColor: PropTypes.string,
  symbol: PropTypes.string,
  textStyles: PropTypes.string,
};

FallbackIcon.defaultProps = {
  bgColor: '#3A3D51',
};

export default FallbackIcon;
