import React from 'react';
import {View,ImageBackground,Text} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import {styles} from '../Styles/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function MainScreen({ navigation }){
    return (
      <View style={styles.viewClose}>
        <ImageBackground style={styles.imageClose} resizeMode='contain' source={require("../image/main.jpg")}>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}><Text style={styles.textClose}>Open</Text></TouchableOpacity>
        </ImageBackground>
      </View>
    );
}
  
