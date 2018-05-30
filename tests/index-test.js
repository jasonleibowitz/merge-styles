import expect from 'expect'

import mergeStyles from '../src/index';
const nativeStyles = {
  container: 'react-component_container',
  text: 'react-component_text',
  title: 'react-component_title',
};

const themeStyles = {
  container: 'theme-override_container',
  text: 'theme-override_text',
  title: 'theme-override_title',
};

describe('Merge Styles', () => {
  it('returns all keys provided in nativeStyles', () => {
    const mergedStyles = mergeStyles(nativeStyles, themeStyles);
    expect(mergedStyles).toIncludeKeys(Object.keys(nativeStyles));
  });

  it('returns all key provided in nativeStyles even if all values are null', () => {
    const mergedStyles = mergeStyles({ container: null, text: null, title: null }, themeStyles);
    expect(mergedStyles).toIncludeKeys(Object.keys(nativeStyles));
  });

  it('returns each key with values from nativeStyles and themeStyles', () => {
    const mergedStyles = mergeStyles(nativeStyles, themeStyles);
    expect(mergedStyles.container).toEqual(`${nativeStyles.container} ${themeStyles.container}`);
    expect(mergedStyles.text).toEqual(`${nativeStyles.text} ${themeStyles.text}`);
    expect(mergedStyles.title).toEqual(`${nativeStyles.title} ${themeStyles.title}`);
  });
})
