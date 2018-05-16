// @flow
import React from 'react';
import radium from 'radium';

import Theme from '../setting.js';

const styles = {
  animatedBackground: {
    width: '100%',
    height: 80,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  firstRow: {
    height: 80,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatarBlock: {
    width: 80,
    height: '100%',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    position: 'relative',
  },
  avatarBlockMask: {
    position: 'absolute',
    left: -20,
    top: -20,
    width: 120,
    height: 120,
    borderRadius: '50%',
    border: `20px solid ${Theme.MAIN_BOARD_BACKGROUND_COLOR}`,
    backgroundColor: 'transparent',
  },
  blockmask: {
    flex: 1,
    height: '100%',
    backgroundColor: Theme.MAIN_BOARD_BACKGROUND_COLOR,
  },
};

function SecondShimmer({
  animationBundle,
}: {
  animationBundle: Object,
}) {
  return (
    <div style={[styles.animatedBackground, animationBundle]}>
      <div style={styles.firstRow}>
        <div style={styles.blockmask} />
        <div style={styles.avatarBlock}>
          <div style={styles.avatarBlockMask} />
        </div>
        <div style={styles.blockmask} />
        <div style={styles.avatarBlock}>
          <div style={styles.avatarBlockMask} />
        </div>
        <div style={styles.blockmask} />
        <div style={styles.avatarBlock}>
          <div style={styles.avatarBlockMask} />
        </div>
        <div style={styles.blockmask} />
        <div style={styles.avatarBlock}>
          <div style={styles.avatarBlockMask} />
        </div>
        <div style={styles.blockmask} />
      </div>
    </div>
  );
}

export default radium(SecondShimmer);
