import React,{Component} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import MovieFinder from './Applications/MovieFinder';
import { Button } from 'react-native';
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
            <MyStack.Screen name = "Search" component = {MovieFinder} options={({navigation})=>({title:'Search',headerRight:()=>(<Button title='My Favorits' onPress={()=>navigation.navigate('Favorite')}/>)})}/>
            <MyStack.Screen name = "Favorite" component = {MovieFinder}/>
          </MyStack.Navigator>
        </NavigationContainer>
       </>
      )   
    }
}