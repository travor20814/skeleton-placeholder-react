// @flow
import React from 'react';
import radium from 'radium';

import Theme from '../setting.js';

const styles = {
  animatedBackground: {
    width: '100%',
    height: 180,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  firstRow: {
    height: 80,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  firstRowLeftBlock: {
    width: 80,
    height: '100%',
    backgroundColor: 'transparent',
  },
  firstRowRightBlock: {
    flex: 1,
    height: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
  },
  firstRowRightBlockMask: {
    width: '100%',
    flex: 1,
    backgroundColor: Theme.MAIN_BOARD_BACKGROUND_COLOR,
  },
  firstRowRightBlockLine: {
    width: '100%',
    flex: 0.5,
    backgroundColor: 'transparent',
    borderLeft: `20px solid ${Theme.MAIN_BOARD_BACKGROUND_COLOR}`,
    borderRight: `200px solid ${Theme.MAIN_BOARD_BACKGROUND_COLOR}`,
  },
  shorterLine: {
    borderRight: `400px solid ${Theme.MAIN_BOARD_BACKGROUND_COLOR}`,
  },
  maskLine: {
    width: '100%',
    height: 10,
    backgroundColor: Theme.MAIN_BOARD_BACKGROUND_COLOR,
  },
  secondRow: {
    width: '100%',
    flex: 1,
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
  },
  secondRowLineWrapper: {
    width: '100%',
    height: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  secondRowLine: {
    flex: 1,
    height: '100%',
    backgroundColor: 'transparent',
  },
  secondRowFirstLineMask: {
    flex: 1,
    height: '100%',
    backgroundColor: Theme.MAIN_BOARD_BACKGROUND_COLOR,
  },
  secondRowSecondLineMask: {
    flex: 3,
    height: '100%',
    backgroundColor: Theme.MAIN_BOARD_BACKGROUND_COLOR,
  },
  secondRowThirdLineMask: {
    flex: 5,
    height: '100%',
    backgroundColor: Theme.MAIN_BOARD_BACKGROUND_COLOR,
  },
  secondRowLineMask: {
    width: '100%',
    height: 8,
    backgroundColor: Theme.MAIN_BOARD_BACKGROUND_COLOR,
  },
  blockMask: {
    width: '100%',
    flex: 1,
    backgroundColor: Theme.MAIN_BOARD_BACKGROUND_COLOR,
  },
};

function FirstShimmer({
  animationBundle,
}: {
  animationBundle: Object,
}) {
  return (
    <div style={[styles.animatedBackground, animationBundle]}>
      <div style={styles.firstRow}>
        <div style={styles.firstRowLeftBlock} />
        <div style={styles.firstRowRightBlock}>
          <div style={styles.firstRowRightBlockMask} />
          <div style={styles.firstRowRightBlockLine} />
          <div style={styles.firstRowRightBlockMask} />
          <div style={[styles.firstRowRightBlockLine, styles.shorterLine]} />
          <div style={styles.firstRowRightBlockMask} />
        </div>
      </div>
      <div style={styles.maskLine} />
      <div style={styles.secondRow}>
        <div style={styles.secondRowLineWrapper}>
          <div style={styles.secondRowLine} />
          <div style={styles.secondRowFirstLineMask} />
        </div>
        <div style={styles.secondRowLineMask} />
        <div style={styles.secondRowLineWrapper}>
          <div style={styles.secondRowLine} />
          <div style={styles.secondRowSecondLineMask} />
        </div>
        <div style={styles.secondRowLineMask} />
        <div style={styles.secondRowLineWrapper}>
          <div style={styles.secondRowLine} />
          <div style={styles.secondRowThirdLineMask} />
        </div>
        <div style={styles.blockMask} />
      </div>
    </div>
  );
}

export default radium(FirstShimmer);
