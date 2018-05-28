// @flow
import React from 'react';
import radium from 'radium';

import animationBundle, { MAIN_BOARD_BACKGROUND_COLOR } from '../config.js';

const styles = {
  animatedBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    position: 'relative',
    overflow: 'hidden',
  },
  avatarBlockMask: {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: 'transparent',
  },
};

type Props = {
  side?: Number,
  backgroundColor?: String,
};

function AvatarShimmer({
  side,
  backgroundColor,
}: Props) {
  return (
    <div style={[styles.animatedBackground, animationBundle]}>
      <div
        style={[
          styles.avatarBlockMask,
          {
            width: `calc(100% + ${side / 2.4375}px)`,
            height: `calc(100% + ${side / 2.4375}px)`,
            left: `-${(side / 2.4375) / 2}px`,
            top: `-${(side / 2.4375) / 2}px`,
            border: `${(side / 2.4375) / 2}px solid ${backgroundColor}`,
          },
        ]} />
    </div>
  );
}

AvatarShimmer.defaultProps = {
  side: 120,
  backgroundColor: MAIN_BOARD_BACKGROUND_COLOR,
};

export default radium(AvatarShimmer);
