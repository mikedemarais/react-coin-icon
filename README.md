# react-coin-icon

React component that displays an icon for a given cryptocurrency symbol.
Supports both React and React Native.

Icons are predominantly sourced from https://github.com/hyperdexapp/cryptocurrency-icons with some customizations.

## Install

Install either via `npm install react-coin-icon --save` or `yarn add react-coin-icon`

For React Native projects using expo install with `expo install react-coin-icon`

## Quickstart

```javascript
import React from 'react';
import CoinIcon from 'react-coin-icon';

export default function YourComponent() {
  return <CoinIcon symbol="btc" />;
}
```

## List of props

| Prop        | Type   | Default   | Description                                                  |
|-------------|--------|-----------|--------------------------------------------------------------|
| symbol*     | string | undefined | Currency symbol (see http://cryptoicons.co/ for entire list) |
| size        | number | 32        | Size of the icon                                             |
| shadowColor | string | #000      | CSS Shadow color on the icon                                 |
| style       | object | {}        | Prop with additional styles                                  |

\* required prop