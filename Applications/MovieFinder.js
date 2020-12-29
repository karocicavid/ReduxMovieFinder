import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity,Image, ImageBackground, Modal, Button} from 'react-native';
import {styles} from "../Styles/styles"; 
import {connect} from 'react-redux';
import {favoriteAdd} from '../Redux/action';

export class MovieFinder extends Component {
  constructor(props) {
    super(props)
    this.state = {
    dataStateJson : [],
    show:false,
    catalog_show : []
    }
  }
  dataJson = [];
  url = 'http://api.tvmaze.com/search/shows?q=';
  movieName = '';
  url1 ='';

  changeUrl=async()=>{
    try{
      this.url1 =  this.url + this.movieName
      const response = await fetch(this.url1)
      const data = await response.json()
      this.dataJson = data
      console.log('change')
    } catch (e){
     console.log(e)
    }  
    this.setState({dataStateJson : this.dataJson})
  }

  componentDidMount = async () => {
    try {
      const response = await fetch('http://api.tvmaze.com/search/shows?q=superman')
      const data = await response.json()
      this.setState({dataStateJson:data})
    } catch (e){
    }
  }

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
        <ImageBackground source={require('../image/myphoto.jpg')} style={styles.image}>
          <View style={{alignItems:'center'}}>
            <Text style={styles.text}>Enter name of your movie</Text>
            <TextInput style={styles.input} onChangeText={(text)=>(this.textUpdate(text))}/>
            <TouchableOpacity style={styles.button} onPress={this.changeUrl}><Text>Search</Text></TouchableOpacity>
          </View>
          <ScrollView> 
                  {this.state.dataStateJson.map((catalog)=>(
                    <View style={{flex:1}} key={catalog.show.id}>
                      <TouchableOpacity onPress={()=>(this.setState({show:true}),this.modalVisible(catalog.show))}>
                        <ChangeImage style={styles.imageInput} image = {catalog.show}/>
                      </TouchableOpacity>
                      <Text style={styles.text}>{catalog.show.name}</Text>
                    </View>
                  ))}
                  <Modal visible={this.state.show}>
                        <Button title='Hide Description' onPress={()=>(this.setState({show:false}))}/>
                        <ScrollView> 
                          <ModalText show={this.state.catalog_show}/>
                          <ChangeImage style={styles.imageInput} image = {this.state.catalog_show}/>
                        </ScrollView>
                  </Modal>
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

const mapDispatchToProps = (dispacth) => {
    return{
      addToFavorite :(movieUrl)=>dispacth(favoriteAdd(movieUrl))
    }
}

const mapStateToProps = (state)=>{
  return{
    list : state.list
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieFinder);