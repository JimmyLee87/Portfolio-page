import react, { Component } from 'react';
import MainHeader from './main_header';

export default class GreenLights extends Component {
  render(){
    return (
      <div class='green-lights-page'>
        <MainHeader />
        <div>This div is for people who love me!</div>
      </div>
    )
  }
}
