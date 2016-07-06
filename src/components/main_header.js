import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showMenu } from '../actions/index';

export default class MainHeader extends Component {

  constructor(props) {
    super(props);

    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onMenuClick(){
    console.log('main_header.js onMenuClick fired...');
    this.props.showMenu()
  }

  render(){
    return (
      <div class='home-page'>
      <header className='main-header'>
        <div className='my-name'>James Lee
          <p className='profession'>software engineer</p>
        </div>
        <div className='main-menu' onClick={() => {this.onMenuClick()}}>MENU</div>
      </header>
      <div className='about-me-box'>
        <div className='about-me-pic-box'>
          <img className='about-me-pic' src='../../assets/profile_pic.jpg'/>
        </div>
        <div className='about-me-text-box'>
          <div className='about-me-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.</div>
          <div className='about-me-link-box'>
            <div className='about-me-links'></div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default connect(null, { showMenu })(MainHeader);
