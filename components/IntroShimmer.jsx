// @flow
import React from 'react';
import radium from 'radium';

const styles = {
  animatedBackground: {
    width: '100%',
    height: 120,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
};

function IntroShimmer({
  animationBundle,
}: {
  animationBundle: Object,
}) {
  return (
    <div style={[styles.animatedBackground, animationBundle]} />
  );
}

export default radium(IntroShimmer);
