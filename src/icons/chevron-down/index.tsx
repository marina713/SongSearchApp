import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {InnerProps} from '../types';

export const ChevronDown = ({colour, width, height}: InnerProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill="none"
    stroke={colour}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M6 9l6 6 6-6" />
  </Svg>
);
