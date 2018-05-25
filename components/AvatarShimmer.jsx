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
  },
  avatarBlockMask: {
    position: 'absolute',
    left: -20,
    top: -20,
    width: 'calc(100% + 40px)',
    height: 'calc(100% + 40px)',
    borderRadius: '50%',
    backgroundColor: 'transparent',
  },
};

type Props = {
  backgroundColor?: String,
};

function AvatarShimmer({
  backgroundColor,
}: Props) {
  return (
    <div style={[styles.animatedBackground, animationBundle]}>
      <div
        style={[
          styles.avatarBlockMask,
          {
            border: `20px solid ${backgroundColor}`,
          },
        ]} />
    </div>
  );
}

AvatarShimmer.defaultProps = {
  backgroundColor: MAIN_BOARD_BACKGROUND_COLOR,
};

export default radium(AvatarShimmer);
