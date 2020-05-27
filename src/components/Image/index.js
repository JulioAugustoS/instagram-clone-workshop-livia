import React from 'react';

import {Original} from './styles';

function Image({smallSource, source, aspectRatio}) {
  return (
    <Original
      loadingIndicatorSource={smallSource}
      source={source}
      ratio={aspectRatio}
      resizeMode="contain"
    />
  );
}

export default Image;
