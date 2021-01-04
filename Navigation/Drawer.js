import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AboutMeTab} from './Tab'
import {EntertaimentStack,ToolsStack} from './Stack';
import {MainScreen,NewsScreen} from '../Screens';
import {drawerOptions} from "../Styles";

const Drawer = createDrawerNavigator();

export function MyDrawer(){
  return(
    <Drawer.Navigator initialRouteName={'Close'} drawerContentOptions={drawerOptions}>
      <Drawer.Screen name = 'Entertaiment' component={EntertaimentStack}/>
      <Drawer.Screen name ="News" component={NewsScreen} />
      <Drawer.Screen name ="Tools" component={ToolsStack}/>
      <Drawer.Screen name ="AboutMe" component={AboutMeTab}/>
      <Drawer.Screen name ="Close" component={MainScreen}/>
    </Drawer.Navigator>
  )
}
