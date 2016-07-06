import React, { Component } from 'react';
import MainHeader from './main_header';

export default class Me extends Component {
  render(){
    return (
      <div class='about-me-page'>
        <MainHeader />
        <div>This div is about me!</div>
      </div>
    )
  }
}
