import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'react-native-sb-chiper';
import {AuthProvider} from './contexts/auth';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
