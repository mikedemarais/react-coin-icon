import PropTypes from "prop-types";
import React, { createElement } from "react";
import { StyleSheet, View } from "react-primitives";
import FallbackIcon from "./FallbackIcon";
import * as CoinIcons from "./icons";

const sx = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f7f7f8",
    justifyContent: "center",
    overflow: "hidden",
  },
});

function formatSymbol(symbol) {
  if (!symbol) return "";
  return symbol.charAt(0).toUpperCase() + symbol.slice(1).toLowerCase();
}

const CoinIcon = ({
  bgColor,
  fallbackRenderer,
  size,
  style,
  symbol,
  ...props
}) => {
  const formattedSymbol = formatSymbol(symbol);

  return (
    <View
      {...props}
      borderRadius={size / 2}
      height={size}
      style={[sx.container, style]}
      width={size}
    >
      {createElement(CoinIcons[formattedSymbol] || fallbackRenderer, {
        bgColor,
        height: size,
        style,
        symbol: formattedSymbol,
        width: size,
        ...props,
      })}
    </View>
  );
};

CoinIcon.propTypes = {
  bgColor: PropTypes.string,
  fallbackRenderer: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  style: PropTypes.object,
  symbol: PropTypes.string.isRequired,
};

CoinIcon.defaultProps = {
  fallbackRenderer: FallbackIcon,
  size: 32,
};

const arePropsEqual = (prev, next) =>
  prev.bgColor === next.bgColor &&
  prev.size === next.size &&
  prev.symbol === next.symbol;

export default React.memo(CoinIcon, arePropsEqual);
