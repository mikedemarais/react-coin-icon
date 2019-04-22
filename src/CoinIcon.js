import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import styled from 'styled-components/primitives';
import FallbackIcon from './FallbackIcon';
import * as CoinIcons from './icons';

const Container = styled.View`
  align-items: center;
  background-color: #f7f7f8;
  border-radius: ${({ size }) => (size / 2)};
  height: ${({ size }) => (size)};
  justify-content: center;
  overflow: hidden;
  width: ${({ size }) => (size)};
`;

const CoinIcon = ({ fallbackRenderer, size, symbol, ...props }) => {
  const formattedSymbol = symbol
    ? symbol[0].toUpperCase() + symbol.slice(1).toLowerCase()
    : '';

  const iconExists = Object.keys(CoinIcons).includes(formattedSymbol);
  const iconElement = iconExists ? CoinIcons[formattedSymbol] : fallbackRenderer;

  return (
    <Container {...props} size={size}>
      {createElement(iconElement, {
        height: size,
        symbol: formattedSymbol,
        width: size,
      })}
    </Container>
  );
}

CoinIcon.propTypes = {
  fallbackRenderer: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};

CoinIcon.defaultProps = {
  fallbackRenderer: FallbackIcon,
  size: 32,
};

export default CoinIcon;
