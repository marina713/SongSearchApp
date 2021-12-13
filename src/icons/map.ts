import * as React from 'react';
import {generalIcons} from '~/constants/icons/general';

import {Close} from './close';
import {ChevronDown} from './chevron-down';

import {OuterProps} from './types';

export const map = {
  [generalIcons.CLOSE]: Close,
  [generalIcons.CHEVRON_DOWN]: ChevronDown,
};

export const getIconComponent = (
  type: string,
  props: OuterProps,
): React.ReactElement => {
  return map[type]
    ? React.createElement(map[type], props)
    : React.createElement(Close, props);
};
