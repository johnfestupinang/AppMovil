/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './components/App';
import Login from './components/Login'

import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, ()=> Login);
//AppRegistry.registerComponent(appName, () => App);

