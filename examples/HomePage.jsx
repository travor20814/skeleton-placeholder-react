import React from 'react';
// components
import IntroShimmer from '../components/IntroShimmer.jsx'; // basic
import ListArticleWithPhoto from '../components/ListArticleWithPhoto.jsx'; // listArticleWithPhoto
import AvatarShimmer from '../components/AvatarShimmer.jsx'; // avatar

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
    borderBottom: '1px dashed rgba(130, 130, 130, 0.35)',
  },
  avatarWrapper: {
    width: 100,
    height: 100,
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
      <div style={styles.componentWrapper}>
        <div style={styles.avatarWrapper}>
          <AvatarShimmer backgroundColor="#fff" />
        </div>
      </div>
    </div>
  );
}
