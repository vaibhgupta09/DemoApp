import {AppRegistry} from 'react-native';
import Navigation from './src/navigation';
import {name as appName} from './app.json';
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => Navigation);