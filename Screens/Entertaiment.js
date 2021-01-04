import React from 'react';
import {ImageBackground,Text} from 'react-native';
import {styles} from '../Styles/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
export function EntertaimentScreen({navigation}) {
    return(
            <ImageBackground source={require('../image/entertaiment.png')} style={styles.imageForScreens}>
              <TouchableOpacity onPress={()=>(navigation.navigate('MovieFinder'))}><Text style={styles.textMovieFinder}>MovieFinder</Text></TouchableOpacity>
            </ImageBackground>
      );
}
