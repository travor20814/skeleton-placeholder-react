/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import { StyleRoot } from 'radium';
import { storiesOf } from '@storybook/react';

import IntroShimmer from '../components/IntroShimmer.jsx';

storiesOf('ShimmerComponents', module)
  .add('IntroShimmer', () => (
    <StyleRoot>
      <IntroShimmer height={120} backgroundColor="#fff" />
    </StyleRoot>
  ));
