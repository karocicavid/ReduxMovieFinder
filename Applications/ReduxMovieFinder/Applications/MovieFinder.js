import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity,Image, ImageBackground, Modal, Button} from 'react-native';
import {styles} from "../Styles/styles"; 
import {connect} from 'react-redux';
import {searchMovie,favoriteAdd,favoriteDelete} from '../Redux/action';
class MovieFinder extends Component {
  constructor(props) {
    super(props)
    this.state={
      modalShow : false
    }
  }
  url = 'http://api.tvmaze.com/search/shows?q=';
  movieName = '';
  url1 ='';
  catalog_show = [];

  textUpdate(myText){
    this.movieName=myText,
    this.url1 =  this.url + this.movieName
  }

  ViewFromProps=()=>{
 if(this.props.route.name == "Back to search"){
      return(
        <View style={{alignSelf:'stretch',width:'100%'}}>
        {this.props.listFav?.map((catalog_show_fromListfav)=>{
          return(
          <View style={{alignSelf:'stretch'}} key={catalog_show_fromListfav.id}>
              <TouchableOpacity onPress ={()=>((this.setState({modalShow:true})),(this.catalog_show = catalog_show_fromListfav))}>
                <ChangeImage style={styles.imageInput2} image = {catalog_show_fromListfav}/>
              </TouchableOpacity>
              <TouchableOpacity onPress = {()=>{this.props.delete(catalog_show_fromListfav)}}>
                  <Text style={styles.textModalDell}>Delete</Text>
              </TouchableOpacity>
              <Text style={styles.text}>{catalog_show_fromListfav.name}</Text>
          </View>
          )
        })}
      </View>)
    }
    else{
      return(
      <>
        {this.props.list?.map((catalog)=>{
          return(
          <View key={catalog.show.id}>
              <TouchableOpacity onPress ={()=>((this.setState({modalShow:true})),(this.catalog_show = catalog.show))}>
                <ChangeImage style={styles.imageInput} image = {catalog.show}/>
              </TouchableOpacity> 
              <TouchableOpacity onPress = {()=>{this.props.favorite(catalog.show)}}>
                  <Text style={styles.textModalAdd}>Add</Text>
              </TouchableOpacity>
              <Text style={styles.text}>{catalog.show.name}</Text>
          </View>
          )})}
        </>)}
  }

  ViewForSearch=()=>{
    if(this.props.route.name == " "){
      return(
        <>
        <Text style={styles.textInput}>Enter name of your movie</Text>
        <TextInput style={styles.input} onChangeText={(text)=>(this.textUpdate(text))}/>
        <TouchableOpacity style={styles.button}  onPress = {() => {this.props.search(this.url1)}}><Text>Search</Text></TouchableOpacity>
        </>
      )
    }
    else{
      return(<></>)
    }
  }

  render() {
      return(
        <>
        <ImageBackground source={require('../image/myphoto.jpg')} style={styles.image}>
        <this.ViewForSearch/>
        <ScrollView style={styles.scrollView}> 
                  <this.ViewFromProps/>
                  <Modal visible={this.state.modalShow}>
                    <View style={styles.viewModal}>
                          <Button title='Hide Description' onPress={()=>(this.setState({modalShow:false}))}/>
                          <ScrollView> 
                            <ModalText show={this.catalog_show}/>
                            <ChangeImage style={styles.imageInput} image = {this.catalog_show}/>
                          </ScrollView>
                    </View> 
                  </Modal> 
          </ScrollView>   
        </ImageBackground>
       </>
      )   
    }
}

export const ChangeImage = (show)=>{
   if(show.image.image!==null){return <Image resizeMode='contain' style={styles.imageInput} source={{uri:show.image.image.medium}}/>}
   else{return <Image style={styles.imageInput1} resizeMode='contain' source ={require('../image/myback.jpg')}/>} 
}
export const ModalText = (show)=>{
    if(show.show.summary!==null){return <><Text style={styles.textModal}>{show.show.summary.replace(/(<([^>]+)>)/gi, "")}</Text></>}
    else{return <><Text style={styles.textModal}>unavialable info</Text></>}
}

function mapDispatchToProps(dispatch){
    return{
      search : (movieUrl) => dispatch(searchMovie(movieUrl)),
      favorite : (propsObject) => dispatch(favoriteAdd(propsObject)),
      delete : (propsObject)=> dispatch(favoriteDelete(propsObject)),dispatch
    }
}

function mapStateToProps(state){
  return{
    list : state.reducerForSearch.list,
    listFav : state.reducerForFavorite.list
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieFinder);


