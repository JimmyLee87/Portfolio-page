import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showMain } from '../actions/index';
import { Link } from 'react-router';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.onCloseMenuClick = this.onCloseMenuClick.bind(this);
  }

  onCloseMenuClick(){
    console.log('menu.js: onCloseMenuClick is firing.')
    this.props.showMain();
  }

  render(){
    return (
      <div className='menu'>
        <div className='close-menu' onClick={() => {this.onCloseMenuClick()}}>CLOSE</div>
        <ul className="menu-list">
          <li className='menu-item fade-in one'><Link to='/jameslee/me' className='to-page'>ABOUT ME</Link></li>
          <li className='menu-item fade-in two'><Link to='/jameslee/projects' className='to-page'>WORK</Link></li>
          <li className='menu-item fade-in three'><Link to='/jameslee/family' className='to-page'>FAMILY</Link></li>
          <li className='menu-item fade-in four'><Link to='/jameslee/green_lights' className='to-page'>LIKES</Link></li>
        </ul>
      </div>
    )
  }
}

export default connect(null, { showMain })(Menu);
