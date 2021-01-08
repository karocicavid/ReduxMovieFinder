import React from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from "../Styles/styles"; 
import { ChangeImage } from "./imageView";

export const ViewFromProps=(props)=>{
  console.log('modallll',props.modalShow)
    if(props.props.route.name == "Back to search"){
         return(
           <View style={{alignSelf:'stretch',width:'100%'}}>
           {props.props.listFav?.map((catalogShowFromListFav)=>{
             return(
             <View style={{alignSelf:'stretch'}} key={catalogShowFromListFav.id}>
                 <TouchableOpacity onPress ={()=>((props.catalogShow = catalogShowFromListFav),(props.modalShow=true))}>
                   <ChangeImage style={styles.imageInput2} image = {catalogShowFromListFav}/>
                 </TouchableOpacity>
                 <TouchableOpacity onPress = {()=>{props.props.delete(catalogShowFromListFav)}}>
                     <Text style={styles.textModalDell}>Delete</Text>
                 </TouchableOpacity>
                 <Text style={styles.text}>{catalogShowFromListFav.name}</Text>
             </View>
             )
           })}
         </View>)
       }
       else{
         return(
         <>
           {props.props.list?.map((catalog)=>{
             return(
             <View key={catalog.show.id}>
                 <TouchableOpacity onPress ={()=>((props.modalShow=true),(props.catalogShow = catalog.show))}>
                   <ChangeImage style={styles.imageInput} image = {catalog.show}/>
                 </TouchableOpacity> 
                 <TouchableOpacity onPress = {()=>{props.props.favorite(catalog.show)}}>
                     <Text style={styles.textModalAdd}>Add</Text>
                 </TouchableOpacity>
                 <Text style={styles.text}>{catalog.show.name}</Text>
             </View>
             )})}
           </>)}
     }