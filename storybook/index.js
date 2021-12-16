import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import { loadStories } from './story-loader';
import './rn-addons';

addDecorator(withKnobs);

configure(() => {
  loadStories();
}, module);

const StorybookUI = getStorybookUI({
  asyncStorage: AsyncStorage,
});

export default StorybookUI;
