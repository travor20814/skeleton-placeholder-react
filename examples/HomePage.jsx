// @flow
import React from 'react';
// components
import IntroShimmer from '../components/IntroShimmer.jsx';
import ListArticleWithPhoto from '../components/ListArticleWithPhoto.jsx';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
};

type Props = {
  type: String,
  height: Number,
  backgroundColor: String,
};

function componentSelector(type, props) {
  switch (type) {
    case 'basic':
      return <IntroShimmer {...props} />;
    case 'listArticleWithPhoto':
      return <ListArticleWithPhoto {...props} />;
    default:
      return null;
  }
}

export default function HomePage({
  type,
  height,
  backgroundColor,
}: Props) {
  return (
    <div style={styles.wrapper}>
      {componentSelector(type, {
        height,
        backgroundColor,
      })}
    </div>
  );
}
