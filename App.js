/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import Router from './Router';
// import RootDrawer from './Router';
// import RootStack from './Router';
import Login from './src/Login';
import RootTabs from './Router';
import { StackNavigator} from 'react-navigation';
import Second from './src/Second';
import First from './src/First';
export default App = StackNavigator(
{
  Login:{
    screen: Login,
    navigationOptions:{
      header:null
    },
  },
  RootTabs:{
    screen:RootTabs,
    navigationOptions:{
    header:null
    },
  },
  First:{
    screen:RootTabs,
    navigationOptions:{
      header:null
      } 
  },
  Second:{
   screen:Second,
 
  }
  
});
  

