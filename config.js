import { keyframes } from 'radium';

const BACKGROUND_MASK_SIZE = 160;

const shimAnimation = keyframes({
  '0%': {
    backgroundPosition: `-${BACKGROUND_MASK_SIZE}px 0`,
  },
  '100%': {
    backgroundPosition: `calc(${BACKGROUND_MASK_SIZE}px + 100%) 0`,
  },
});

export default {
  backgroundColor: '#eeeeee',
  backgroundImage: 'linear-gradient(to right, #eeeeee 0%, #dddddd 50%, #eeeeee 100%)',
  backgroundSize: `${BACKGROUND_MASK_SIZE}px 100%`,
  backgroundRepeat: 'no-repeat',
  animationName: shimAnimation,
  animationDuration: '1.5s',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
};
