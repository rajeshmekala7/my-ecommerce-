import React from 'react';
import {Text,View,Image} from 'react-native';
import { TabNavigator,StackNavigator } from 'react-navigation';
import First from './src/First';

import Cart from './src/Cart';
import WishList from './src/WishList';
import Account from './src/Account';
import Second from './src/Second';
import Location from './src/Location';


const RootTabs = TabNavigator({
 
  First: {
    screen: First,
    navigationOptions: {
        tabBarLabel:'HOME',
        // swipeEnabled: false,
        tabBarIcon: (<Image style={{width:25,height:25,resizeMode:'contain'}} source={require('./photos/home.png')}/>),
      }
      
    },
    WishList:{
      screen:WishList,
      navigationOptions: {
        tabBarLabel:'wishlist',
        // swipeEnabled: false,
        tabBarIcon: (<Image style={{width:25,height:25,resizeMode:'contain'}} source={require('./photos/wishicon.png')}/>),
      }
      
    },
    Cart:{
      screen:Cart,
      navigationOptions: {
        tabBarLabel:'cart',
        // swipeEnabled: false,
        tabBarIcon: (<Image style={{width:25,height:25,resizeMode:'contain'}} source={require('./photos/carticon.png')}/>)
      }
      
    },
   Account:{
    screen:Account,
    navigationOptions: {
      tabBarLabel:'account',
      // swipeEnabled: false,
      tabBarIcon: (<Image style={{width:25,height:25,resizeMode:'contain'}} source={require('./photos/acc.png')}/>),
    }
   },
  //  Location:{
  //   screen:Location,
  //   navigationOptions: {
  //     tabBarLabel:'loc',
  //     // swipeEnabled: false,
  //     tabBarIcon: (<Image style={{width:25,height:25,resizeMode:'contain'}} source={require('./photos/loc.png')}/>),
  //   }
  //  },
  },
  
 {
  tabBarPosition: 'bottom',
  tabBarOptions:{
    showIcon:true,
    tabBarColor:'#fff',
    //  height:0
  },
  tabStyle:{
    // height: 40,
    // width: 1
   },
   style:{
      paddding:1
   }
 }

);



 export default RootTabs;