import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs';

import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import LaunchScreen from './src/screens/LaunchScreen';

const switchNavigator = createSwitchNavigator({
  Launch: { screen: LaunchScreen},
  loginFlow: createStackNavigator({
    Signup: { screen: SignupScreen },
    Signin: { screen: SigninScreen }
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: { screen: TrackCreateScreen },
    Account: { screen: AccountScreen }
  })
})

export default createAppContainer(switchNavigator);
