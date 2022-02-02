import {LogBox} from 'react-native';

const disableAppLogs = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
};

export default disableAppLogs;
