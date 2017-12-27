/*Meteor/React imports*/
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Accounts } from 'meteor/accounts-base';

/*React components*/
import PrivateHeader from './PrivateHeader';

export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
          Dashboard page content
      </div>
    </div>
  );
}
