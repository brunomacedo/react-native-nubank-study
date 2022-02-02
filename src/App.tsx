import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import disableAppLogs from './utils/logs';
import Routes from './routes';
import styles, {primary} from './theme/styles';

disableAppLogs();

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={styles.safearea}>
      <SafeAreaView style={styles.safearea}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor={primary} />
          <Routes />
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
