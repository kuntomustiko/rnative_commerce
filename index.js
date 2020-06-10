/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// redux
import {Provider} from 'react-redux';
import store from './src/redux';

AppRegistry.registerComponent(appName, () => App);
