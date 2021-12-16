import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { name as appName } from './app.json';

// App
import App from './App';
AppRegistry.registerComponent(appName, () => App);

// Storybook
// import StorybookUI from './storybook';
// AppRegistry.registerComponent(appName, () => StorybookUI);

TrackPlayer.registerPlaybackService(() => require('./service'));
