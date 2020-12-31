import React,{Component} from 'react';
import {Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
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
        <NavigationContainer>
          <MyStack.Navigator>
            <MyStack.Screen name = "Search" component = {MovieFinder} options={({navigation})=>({title:'Search',headerRight:()=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Favorits')}>
              <Text style={styles.textNavigation}>My Favorits</Text>
            </TouchableOpacity>
            )})}/>
            <MyStack.Screen name = "Favorits" component = {MovieFinder}/>
          </MyStack.Navigator>
        </NavigationContainer>
       </>
      )   
    }
}