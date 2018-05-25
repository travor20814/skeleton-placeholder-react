import React from 'react';
// components
import IntroShimmer from '../components/IntroShimmer.jsx';
import ListArticleWithPhoto from '../components/ListArticleWithPhoto.jsx';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    padding: 24,
    overflowY: 'auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  componentWrapper: {
    width: '100%',
    height: 'auto',
    padding: '24px 0',
  },
};

export default function HomePage() {
  const propsSet = {
    height: 120,
    backgroundColor: '#fff',
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.componentWrapper}>
        <IntroShimmer {...propsSet} />
      </div>
      <div style={styles.componentWrapper}>
        <ListArticleWithPhoto {...propsSet} />
      </div>
    </div>
  );
}
