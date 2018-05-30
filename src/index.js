import classNames from 'classnames';

/**
 * Takes two style objects and merges them together using
 * classnames(https: //github.com/JedWatson/classnames)
 * @param {Object} nativeStyles - Initial style Object. Should contain
 * all possible keys, even if some values are null.
 * @param {Object} themeStyles - Themed styles to override initial styles.
 * @returns {Object} merged style object
 */
export default (nativeStyles, themeStyles) => {
  return Object.keys(nativeStyles).reduce((result, key) => {
    result[key] = classNames(nativeStyles[key], themeStyles && themeStyles[key]);
    return result;
  }, {});
};
