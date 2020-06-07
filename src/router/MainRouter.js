import React from 'react';
import {View, Text} from 'react-native';

// tab navigator
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const MainTab = createBottomTabNavigator();

// screens
import Account from '../screens/Account/Account';
import Feed from '../screens/Feed/Feed';
import Add from '../screens/Add/Add';

const MainRouter = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Feed" component={Feed} />
      <MainTab.Screen name="Add" component={Add} />
      <MainTab.Screen name="Account" component={Account} />
    </MainTab.Navigator>
  );
};

export default MainRouter;

// sebanyak apapun naviagte yang ada maka harus dibungkus dengan NavigatorContainer
// vector icon akan memberikan icon di bottom tabs
