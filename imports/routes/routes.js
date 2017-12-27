/*Meteor/React imports*/
import { Meteor } from 'meteor/meteor';
import React from 'react';

/*Router/Accounts imports */
import { Router, Route, browserHistory } from 'react-router';

/*React Components*/
import Signup from './../ui/Signup';
import Dashboard from './../ui/Dashboard';
import NotFound from './../ui/NotFound';
import Login from './../ui/Login';

/*Consts*/
const unauthedPages = ['/', '/signup'];
const authedPages = ['/dashboard'];
const onEnterPublicPage = () => {
  if(Meteor.userId()){
    browserHistory.replace('/dashboard');
  }
};

const onEnterPrivatePage = () => {
  if(!Meteor.userId()){
    browserHistory.replace('/');
  }
};

export const onAuthChange = (isAuthenticated) => {
  const path = browserHistory.getCurrentLocation().pathname;
  const isUnauthedPage = unauthedPages.includes(path);
  const isAuthedPage = authedPages.includes(path);

  //Redirection based on where the user is and if said user is authenticated
  if(isUnauthedPage && isAuthenticated){
    browserHistory.replace('/dashbaord');
  }else if(isAuthedPage && !isAuthenticated){
    browserHistory.replace('/');
  }
}

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/dashboard" component={Dashboard} onEnter={onEnterPrivatePage}/>
    <Route path="/*" component={NotFound} onEnter={onEnterPrivatePage}/>
  </Router>
);//path="*" catches all paths not defined in other Route components


Tracker.autorun(() =>{
  //Info needed to check redirection cases
  const isAuthenticated = !!Meteor.userId();
  const path = browserHistory.getCurrentLocation().pathname;
  const isUnauthedPage = unauthedPages.includes(path);
  const isAuthedPage = authedPages.includes(path);

  //Redirection based on where the user is and if said user is authenticated
  if(isUnauthedPage && isAuthenticated){
    browserHistory.replace('/dashboard');
  }else if(isAuthedPage && !isAuthenticated){
    browserHistory.replace('/');
  }
  console.log('Authed?',isAuthenticated);
});
