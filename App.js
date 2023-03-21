import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import InputScreen from './InputScreen';
import HomeScreen from './HomeScreen';

const AppSwitchNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  InputScreen:InputScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
