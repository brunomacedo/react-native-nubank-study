import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {colors} from './theme/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
  },
});

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
