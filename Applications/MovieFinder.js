import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity,Image, ImageBackground, Modal, Button} from 'react-native';
import {styles} from "../Styles/styles"; 
import {connect} from 'react-redux';
import {favoriteAdd,asyncAction,searchMovie} from '../Redux/action';

class MovieFinder extends Component {
  constructor(props) {
    super(props)
  }
  
  url = 'http://api.tvmaze.com/search/shows?q=';
  movieName = '';
  url1 ='';

  textUpdate(myText){
    this.movieName=myText,
    this.url1 =  this.url + this.movieName
  }
  modalVisible(catalog){
    this.setState({
      catalog_show:catalog
    })
  }
  render() {
      return(
        <>
        {console.log('this.url1-',this.url1)}
        <ImageBackground source={require('../image/myphoto.jpg')} style={styles.image}>
          <View style={{alignItems:'center'}}>
            <Text style={styles.text}>Enter name of your movie</Text>
            <TextInput style={styles.input} onChangeText={(text)=>(this.textUpdate(text))}/>
            <TouchableOpacity style={styles.button}  onPress = {() => {this.props.search(this.url1)}}><Text>Search</Text></TouchableOpacity>
          </View>
          <ScrollView> 
                  {this.props.list?.map((catalog)=>(
                    <View style={{flex:1}} key={catalog.show.id}>
                        <ChangeImage style={styles.imageInput} image = {catalog.show}/>
                      <Text style={styles.text}>{catalog.show.name}</Text>
                    </View>
                  ))}
          </ScrollView>   
        </ImageBackground>
       </>
      )   
    }
}

export const ChangeImage = (show)=>{
   if(show.image.image!==null){return <><Image resizeMode='contain' style={styles.imageInput} source={{uri:show.image.image.medium}}/></>}
   else{return <><Image style={styles.imageInput} source ={require('../image/myback.jpg')}/></>} 
}
export const ModalText = (show)=>{
    if(show.show.summary!==null){return <><Text style={styles.textModal}>{show.show.summary.replace(/(<([^>]+)>)/gi, "")}</Text></>}
    else{return <><Text style={styles.textModal}>unavialable info</Text></>}
}

function mapDispatchToProps(dispatch){
    return{
      search : (movieUrl) => dispatch(asyncAction(movieUrl,'search')),
      favorite : (movieUrl) => dispatch(asyncAction(movieUrl,'favorite')),dispatch
    }
}

function mapStateToProps(state){
  return{
    list : state.list
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieFinder);



{/* <Modal visible={this.state.show}>
<Button title='Hide Description' onPress={()=>(this.setState({show:false}))}/>
<ScrollView> 
  <ModalText show={this.state.catalog_show}/>
  <ChangeImage style={styles.imageInput} image = {this.state.catalog_show}/>
</ScrollView>
</Modal> */}