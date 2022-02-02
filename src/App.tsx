import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import styles from './theme/styles';

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={styles.safearea}>
      <SafeAreaView style={styles.safearea}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <Routes />
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
