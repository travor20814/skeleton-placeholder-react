import React from 'react';
import radium, { keyframes } from 'radium';

import Theme from './setting.js';
import IntroShimmer from './components/IntroShimmer.jsx';
import FirstShimmer from './components/FirstShimmer.jsx';
import SecondShimmer from './components/SecondShimmer.jsx';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    padding: 24,
    backgroundColor: Theme.MAIN_BOARD_BACKGROUND_COLOR,
    display: 'flex',
    flexDirection: 'column',
  },
  shimmerWrapper: {
    width: '100%',
    margin: '24px 0',
  },
  splitLine: {
    width: '100%',
    height: 0,
    border: '1px dashed rgb(47, 120, 139)',
  },
};

const shimAnimation = keyframes({
  '0%': {
    backgroundPosition: '0 0', // horizontal, vertical
  },
  '100%': {
    backgroundPosition: `${window.innerWidth}px 0`,
  },
});

const ANIMATION_BACKGROUND_BUNDLE = {
  animationDuration: '1s',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
  animationName: shimAnimation,
  animationTimingFunction: 'linear',
  background: 'linear-gradient(to right, #eeeeee 0%, #dddddd 10%, #eeeeee 25%)',
};

function HomePage() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.shimmerWrapper}>
        <IntroShimmer animationBundle={ANIMATION_BACKGROUND_BUNDLE} />
      </div>
      <div style={styles.splitLine} />
      <div style={styles.shimmerWrapper}>
        <FirstShimmer animationBundle={ANIMATION_BACKGROUND_BUNDLE} />
      </div>
      <div style={styles.splitLine} />
      <div style={styles.shimmerWrapper}>
        <SecondShimmer animationBundle={ANIMATION_BACKGROUND_BUNDLE} />
      </div>
    </div>
  );
}

export default radium(HomePage);
