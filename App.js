import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text} from 'react-native';
import {MovieFinder} from './Applications/MovieFinder';


export default class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
      return(
        <>
        <MovieFinder/>
       </>
      )   
    }
}