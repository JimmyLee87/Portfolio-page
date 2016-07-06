import React, { Component } from 'react';
import MainHeader from './main_header';

export default class Projects extends Component {
  render(){
    return (
      <div class='projects-page'>
        <MainHeader />
        <div>This div is about my projects!</div>
      </div>
    )
  }
}
