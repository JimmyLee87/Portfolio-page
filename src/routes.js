import React from 'react';

import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Menu from './components/menu';
import Me from './components/me';
import Projects from './components/projects';
import GreenLights from './components/green_lights';
import Family from './components/family';
import ContactMe from './components/contact';

export default (
  <Route path='/' component={App}>
    <Route path='jameslee/me' component={Me}></Route>
    <Route path='jameslee/projects' component={Projects}></Route>
    <Route path='jameslee/green_lights' component={GreenLights}></Route>
    <Route path='jameslee/family' component={Family}></Route>
    <Route path='jameslee/contact-me' component={ContactMe}></Route>
  </Route>
);
