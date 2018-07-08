Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getProps = function getProps(config) {
  var props = [];
  if (config.ref) props.push('svgRef');
  if (config.titleProp) props.push('title');
  if (config.expandProps) props.push('...props');

  if (props.length === 0) return '()';
  if (props.length === 1 && config.expandProps) return 'props';

  return '({ ' + String(props.join(', ')) + ' })';
};

var getComponents = function getComponents(components) {
  if (!components.size) return '';
  var componentsStr = [].concat(_toConsumableArray(components)).filter(function (component) {
    return component !== 'Svg';
  }).join(', ');
  return ', { ' + String(componentsStr) + ' }';
};

var getWarning = function getWarning(components) {
  if (!components.size) return '';
  var componentList = [].concat(_toConsumableArray(components)).join(', ');
  return '\n// SVGR has dropped some elements not supported by react-native-svg: ' + String(componentList) + '\n';
};

var reactNativeTemplate = function reactNativeTemplate(code, config, state) {
  var _state$reactNativeSvg = state.reactNativeSvgReplacedComponents,
      reactNativeSvgReplacedComponents = _state$reactNativeSvg === undefined ? new Set() : _state$reactNativeSvg,
      _state$unsupportedCom = state.unsupportedComponents,
      unsupportedComponents = _state$unsupportedCom === undefined ? new Set() : _state$unsupportedCom;


  var props = getProps(config);
  var components = getComponents(reactNativeSvgReplacedComponents);
  var warnLog = getWarning(unsupportedComponents);

  var result = 'import React from \'react\'\n';
  result += 'import Svg' + String(components) + ' from \'svgs\';\n';
  result += warnLog;
  result += 'const ' + String(state.componentName) + ' = ' + String(props) + ' => ' + String(code) + '\n\n';
  result += 'export default ' + String(state.componentName);

  return result;
};

exports['default'] = reactNativeTemplate;
