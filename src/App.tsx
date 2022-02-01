import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import styles from './theme/styles';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safearea}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
