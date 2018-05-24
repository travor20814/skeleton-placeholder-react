// @flow
import React from 'react';
import radium from 'radium';

import animationBundle from '../config.js';

const styles = {
  animatedBackground: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
};

type Props = {
  height?: Number,
};

function IntroShimmer({
  height,
}: Props) {
  return (
    <div
      style={[
        styles.animatedBackground,
        animationBundle,
        {
          height,
        },
      ]} />
  );
}

IntroShimmer.defaultProps = {
  height: 120,
};

export default radium(IntroShimmer);
