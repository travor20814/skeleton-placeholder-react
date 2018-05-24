# Skeleton Placeholder Shimmer
This library have some specific types of skeleton placeholder that I created for you.
You don't need to worry about constructing your own placeholder.
## Installation
```
npm i skeleton-placeholder-react
```
or you can install by yarn
```
yarn add skeleton-placeholder-react
```

## Usage
Since this component will fill your container, you should wrap this library by a div container.
```
import SkeletonShimmer from 'skeleton-placeholder-react';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
  },
};

<div style={styles.wrapper}>
  <SkeletonShimmer
     type="basic"
     height={120}
     backgroundColor="#fff" />
</div>
```

## Props
Here are some props available for using this component.
- type(String) (required): 'basic', 'listArticleWithPhoto'
- height(Number): Number you assign to the skeleton placeholder (default is 120)
- backgroundColor(String): change placeholder backgroundColor (default is #fff)

## TODO LIST
- [ ] add more types of skeletons
- [ ] add 'count' props, so you can insert more than one placeholder at same time
