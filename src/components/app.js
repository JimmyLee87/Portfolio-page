import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainHeader from './main_header';
import Menu from './menu';

class App extends Component {
  render() {
    return (
      <div className='main-page'>
        { this.props.main ? <MainHeader /> : null }
        { this.props.menu ? <Menu /> : null }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    main: state.portfolio.mainPage,
    menu: state.portfolio.menuPage
  }
}

export default connect(mapStateToProps)(App);

