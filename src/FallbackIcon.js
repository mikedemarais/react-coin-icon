import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-primitives";

const sx = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
  },
  text: {
    color: "#ffffff",
    fontWeight: '600',
    textTransform: "uppercase",
  },
});

function buildFallbackFontSize(symbol, width) {
  if (!symbol) return 0;
  else if (width < 30 || symbol.length > 4) return 8;
  else if (symbol.length === 4) return 10;
  else if (symbol.length === 1 || symbol.length === 2) return 13;
  return 11;
}

function formatSymbol(symbol, width) {
  if (!symbol) return "";
  return symbol.replace(/[^a-zA-Z0-9]/g, "").substring(0, width < 30 ? 1 : 5);
}

const FallbackIcon = ({ bgColor = "#3A3D51", symbol = "", textStyles, width, ...props }) => {
  const formattedSymbol = useMemo(() => formatSymbol(symbol, width), [
    symbol,
    width,
  ]);

  const fontSize = useMemo(
    () => ({ fontSize: buildFallbackFontSize(formattedSymbol, width) }),
    [formattedSymbol, width]
  );

  return (
    <View {...props} backgroundColor={bgColor} style={sx.container}>
      <Text style={[sx.text, fontSize, textStyles]}>{formattedSymbol}</Text>
    </View>
  );
};

const arePropsEqual = (prev, next) =>
  prev.bgColor === next.bgColor && prev.symbol === next.symbol;

export default React.memo(FallbackIcon, arePropsEqual);
