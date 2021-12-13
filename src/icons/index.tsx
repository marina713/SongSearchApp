import * as React from 'react';

import {getIconComponent} from './map';
import {Props} from './types';

export const SVGIcon = ({
  type,
  colour = '#333',
  stroke,
  size = 24,
}: Props): React.ReactElement => {
  const iconProps = {
    colour,
    fill: colour,
    stroke,
    width: size,
    height: size,
  };

  return getIconComponent(type, iconProps);
};
