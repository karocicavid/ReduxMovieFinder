import React,{Component} from 'react';
import {Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import MovieFinder from './Applications/MovieFinder';
import { TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Styles';
const MyStack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
      return(
        <>
          <MyStack.Navigator>
            <MyStack.Screen name = " " component = {MovieFinder} options={{headerShown:false}}/>
            <MyStack.Screen name = "Back to search" component = {MovieFinder}/>
          </MyStack.Navigator>
       </>
      )   
    }
}