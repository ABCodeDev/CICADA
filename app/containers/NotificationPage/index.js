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
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';

const styles = {
  floatingActionButton: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
  editButton: {
    fill: grey500
  },
  columns: {
    id: {
      width: '10%'
    },
    title: {
      width: '10%'
    },
    description: {
      width: '20%'
    },
    created: {
      width: '20%'
    },
    updated: {
      width: '20%'
    },
    edit: {
      width: '10%'
    }
  }
};

export class NotificationPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(){
    super();
  }

  reformatData(data) {
    for (var i = 0; i < data.length; i++) {
      delete data[i]['components'];
    }
    var newData = {items:data};
    return newData;
  }

  render() {
    let data = ""
    let token = this.props.global.user.token;

    if (!this.props.NotificationPage.notification_received && !this.props.NotificationPage.fetch_failed)
    {
      this.props.notificationFetchAction(token);
    }

    else
    {
      console.log('done');
    }

    if (this.props.NotificationPage.notification_received) {
      data = this.reformatData(this.props.NotificationPage.data);
      console.log(data.items);
    }

    return (
      <div>
        <Helmet
          title="Notification Page"
          meta={[
            {name: 'description', content: 'Description of ResponsePage'},
          ]}
        />
        <PageBase title="Notifications"
                  navigation="">

          <Link to="/form">
            <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
              <ContentAdd />
            </FloatingActionButton>
          </Link>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn style={styles.columns.id}>ID</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.title}>Title</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.description}>Description</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.created}>Created</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.updated}>Updated</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.props.NotificationPage.notification_received == true &&
              data.items.map(item =>
                <TableRow key={item.id}>
                  <TableRowColumn style={styles.columns.id}>{item.id}</TableRowColumn>
                  <TableRowColumn style={styles.columns.title}>{item.title}</TableRowColumn>
                  <TableRowColumn style={styles.columns.description}>{item.description}</TableRowColumn>
                  <TableRowColumn style={styles.columns.created}>{item.created}</TableRowColumn>
                  <TableRowColumn style={styles.columns.updated}>{item.updated}</TableRowColumn>
                  <TableRowColumn style={styles.columns.edit}>
                    <Link className="button" to="/form">
                      <FloatingActionButton zDepth={0}
                                            mini={true}
                                            backgroundColor={grey200}
                                            iconStyle={styles.editButton}>
                        <ContentCreate  />
                      </FloatingActionButton>
                    </Link>
                  </TableRowColumn>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </PageBase>
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
