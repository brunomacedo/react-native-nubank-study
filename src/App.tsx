import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f',
  },
});

const App: React.FC = () => {
  return <View style={styles.container} />;
};

export default App;
