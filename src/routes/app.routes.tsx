import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from '../pages/Main';

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AppStack.Screen name="Main" component={Main} />
  </AppStack.Navigator>
);

export default AppRoutes;
