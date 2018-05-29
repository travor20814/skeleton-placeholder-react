// @flow
import React from 'react';
import radium from 'radium';

import animationBundle, { MAIN_BOARD_BACKGROUND_COLOR } from '../config.js';

const styles = {
  animatedBackground: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  blockMask: {
    width: '100%',
    flex: 0.1,
  },
  mainRow: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  mainRowLeftBlock: {
    flex: 1,
    height: '100%',
    backgroundColor: 'transparent',
  },
  mainRowRightBlock: {
    flex: 7,
    height: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
  },
  mainRowRightBlockLineWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  titleWrapper: {
    flex: 1.6,
  },
  contentWrapper: {
    flex: 1,
  },
  maskWrapper: {
    flex: 1,
  },
  titleVisibleLine: {
    flex: 1,
    height: '100%',
    backgroundColor: 'transparent',
  },
  titleMaskLine: {
    flex: 6,
    height: '100%',
  },
  contentVisibleLongLine: {
    flex: 3,
    height: '100%',
    backgroundColor: 'transparent',
  },
  contentVisibleShortLine: {
    flex: 1.6,
    height: '100%',
    backgroundColor: 'transparent',
  },
  contentMaskLine: {
    flex: 1,
    height: '100%',
  },
};

function ListArticleWithPhoto({
  height,
  backgroundColor,
}: {
  height?: Number,
  backgroundColor?: String,
}) {
  return (
    <div
      style={[
        styles.animatedBackground,
        animationBundle,
        {
          height,
        },
      ]}>
      <div
        style={[
          styles.blockMask,
          {
            backgroundColor,
          },
        ]} />
      <div style={styles.mainRow}>
        <div style={styles.mainRowLeftBlock} />
        <div style={styles.mainRowRightBlock}>
          <div style={[styles.mainRowRightBlockLineWrapper, styles.titleWrapper]}>
            <div style={[
              styles.titleVisibleLine,
              {
                borderLeft: `12px solid ${backgroundColor}`,
              },
            ]} />
            <div
              style={[
                styles.titleMaskLine,
                {
                  backgroundColor,
                },
              ]} />
          </div>
          <div style={[styles.mainRowRightBlockLineWrapper, styles.maskWrapper]}>
            <div
              style={[
                styles.contentMaskLine,
                {
                  backgroundColor,
                },
              ]} />
          </div>
          <div style={[styles.mainRowRightBlockLineWrapper, styles.contentWrapper]}>
            <div
              style={[
                styles.contentVisibleLongLine,
                {
                  borderLeft: `12px solid ${backgroundColor}`,
                },
              ]} />
            <div
              style={[
                styles.contentMaskLine,
                {
                  backgroundColor,
                },
              ]} />
          </div>
          <div style={[styles.mainRowRightBlockLineWrapper, styles.maskWrapper]}>
            <div
              style={[
                styles.contentMaskLine,
                {
                  backgroundColor,
                },
              ]} />
          </div>
          <div style={[styles.mainRowRightBlockLineWrapper, styles.contentWrapper]}>
            <div
              style={[
                styles.contentVisibleShortLine,
                {
                  borderLeft: `12px solid ${backgroundColor}`,
                },
              ]} />
            <div
              style={[
                styles.contentMaskLine,
                {
                  backgroundColor,
                },
              ]} />
          </div>
          <div style={[styles.mainRowRightBlockLineWrapper, styles.maskWrapper]}>
            <div
              style={[
                styles.contentMaskLine,
                {
                  backgroundColor,
                },
              ]} />
          </div>
        </div>
      </div>
      <div
        style={[
          styles.blockMask,
          {
            backgroundColor,
          },
        ]} />
    </div>
  );
}

ListArticleWithPhoto.defaultProps = {
  height: 120,
  backgroundColor: MAIN_BOARD_BACKGROUND_COLOR,
};

export default radium(ListArticleWithPhoto);
