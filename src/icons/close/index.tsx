import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { InnerProps } from '../types';

export const Close = ({ colour, width, height }: InnerProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill="none"
    stroke={colour}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="M18 6L6 18M6 6l12 12" />
  </Svg>
);
