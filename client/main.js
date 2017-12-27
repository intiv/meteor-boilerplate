/*Meteor/React imports*/
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

/*Routes*/
import { routes, onAuthChange } from '../imports/routes/routes';

/*API/Config imports*/
import '../imports/startup/simpl-schema-config';

Tracker.autorun(() => {
  //Info needed to check redirection cases
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
