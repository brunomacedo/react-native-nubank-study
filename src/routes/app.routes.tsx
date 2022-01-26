import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashoboard from '../pages/Dashboard';

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" component={Dashoboard} />
  </AppStack.Navigator>
);

export default AppRoutes;
