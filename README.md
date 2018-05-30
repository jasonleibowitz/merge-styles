# @jasonleibowitz/merge-styles

Merge Styles

[![Build Status](https://travis-ci.org/jasonleibowitz/merge-styles.svg?branch=master)](https://travis-ci.org/jasonleibowitz/merge-styles)
[![Coverage Status](https://coveralls.io/repos/github/jasonleibowitz/merge-styles/badge.svg?branch=master)](https://coveralls.io/github/jasonleibowitz/merge-styles?branch=master)


Simple JS Utility to merge multiple classnames together. I use this in my react apps to make components easily themeable via a theme prop.

## Example Usage

```
import React from 'react';
import mergeStyles from 'merge-styles';
import styles from './styles.css'

export default function Component({ theme }) {
  const mergedStyles = mergeStyles({
    container: styles.container,
    text: null,
    title: styles.title,
  })

  return (
    <div className={mergedStyles.container}>
      <h1 className={mergedStyles.title}>Hello World</h1>
      <p className={mergedStyles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget felis non quam bibendum vestibulum et et libero. Morbi in diam nec ex euismod consectetur. Phasellus elementum, dolor vitae ullamcorper vulputate, nunc turpis dictum lectus, non rhoncus magna velit vel nulla. Quisque tincidunt vehicula turpis a auctor. Fusce quis tempor risus, vel faucibus dolor. Pellentesque non ultricies nisl, non auctor neque. Nunc vulputate varius ipsum et lobortis.</p>
    </div>
  );
}
```
