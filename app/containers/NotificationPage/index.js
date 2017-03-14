/*
 *
 * NotificationPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectNotificationPage from './selectors';
import selectGlobal from '../App/selectors';
import { notificationFetchAction } from './actions';

export class NotificationPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(){
    super();
  }

  reformatData(data) {
    for (var i = 0; i < data.length; i++) {
      delete data[i]['components'];
    }
    return JSON.stringify(data);
  }

  render() {
    let data = ""
    let token = this.props.global.user.token;
    if (!this.props.NotificationPage.notification_received && !this.props.NotificationPage.fetch_failed) {
      this.props.notificationFetchAction(token);
    } else {
      console.log('done');
    }
    if (this.props.NotificationPage.notification_received) {
      data = this.reformatData(this.props.NotificationPage.data);
      console.log(data);
    }
    return (
      <div>
        <Helmet
          title="NotificationPage"
          meta={[
            { name: 'description', content: 'Description of NotificationPage' },
          ]}
        />
      </div>
    );
  }
}

NotificationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  notificationFetchAction: PropTypes.func.isRequired,

};

const mapStateToProps = createStructuredSelector({
  NotificationPage: makeSelectNotificationPage(),
  global: selectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    notificationFetchAction: (token) => dispatch(notificationFetchAction(token)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPage);
