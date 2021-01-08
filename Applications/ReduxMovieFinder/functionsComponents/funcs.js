import React from 'react';
import { View, Text, TextInput, TouchableOpacity,Image} from 'react-native';
import {styles} from "../Styles/styles"; 

export const ViewFromProps=(props)=>{
    if(props.props.route.name == "Back to search"){
         return(
           <View style={{alignSelf:'stretch',width:'100%'}}>
           {props.props.listFav?.map((catalogShowFromListFav)=>{
             return(
             <View style={{alignSelf:'stretch'}} key={catalogShowFromListFav.id}>
                 <TouchableOpacity onPress ={()=>(props.catalogShow = catalogShowFromListFav)}>
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
                 <TouchableOpacity onPress ={()=>((this.setState({modalShow:true})),(props.catalogShow = catalog.show))}>
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
export const ViewForSearch=(props)=>{
    let movieName='';
    if(props.props.route.name == " "){
      return(
        <>
        <Text style={styles.textInput}>Enter name of your movie</Text>
        <TextInput style={styles.input} onChangeText={(text)=>(movieName=text)}/>
        <TouchableOpacity style={styles.button}  onPress = {() => {props.props.search(movieName)}}><Text>Search</Text></TouchableOpacity>
        </>
      )
    }
    else{return(<></>)}
  }
export const ChangeImage = (show)=>{
    if(show.image.image!==null){return <Image resizeMode='contain' style={styles.imageInput} source={{uri:show.image.image.medium}}/>}
    else{return <Image style={styles.imageInput1} resizeMode='contain' source ={require('../image/myback.jpg')}/>} 
 }
export const ModalText = (show)=>{
     if(show.show.summary!==null){return <><Text style={styles.textModal}>{show.show.summary.replace(/(<([^>]+)>)/gi, "")}</Text></>}
     else{return <><Text style={styles.textModal}>unavialable info</Text></>}
 }