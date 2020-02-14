import { toLower, upperFirst } from 'lodash';
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

const CoinIcon = ({
  bgColor,
  fallbackRenderer,
  size,
  symbol,
  ...props
}) => {
  const formattedSymbol = upperFirst(toLower(symbol));
  const renderer = CoinIcons[formattedSymbol] || fallbackRenderer;

  return (
    <Container {...props} size={size}>
      {createElement(renderer, {
        bgColor,
        height: size,
        symbol: formattedSymbol,
        width: size,
        ...props,
      })}
    </Container>
  );
}

CoinIcon.propTypes = {
  bgColor: PropTypes.string,
  fallbackRenderer: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};

CoinIcon.defaultProps = {
  fallbackRenderer: FallbackIcon,
  size: 32,
};

export default React.memo(CoinIcon);
