import React,{Component} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import MovieFinder from './Applications/MovieFinder';
const MyStack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
      return(
        <>
        <NavigationContainer>
          <MyStack.Navigator>
            <MyStack.Screen name = "Search" component = {MovieFinder}/>
            <MyStack.Screen name = "Favorite" component = {MovieFinder}/>
          </MyStack.Navigator>
        </NavigationContainer>
       </>
      )   
    }
}