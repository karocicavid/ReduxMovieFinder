import React, { Component } from 'react';
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

