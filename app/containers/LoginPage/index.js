/*
 *
 * LoginPage
 *
 */

import loginAction from './actions';
import { push } from 'react-router-redux';
import loginAction from './actions';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectLoginPage from './selectors';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function


  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  login(username,email,password){
    this.props.attemptLogin(username,email,password);
  }


render() {

  return (
    <div>
      <Helmet
        title="LoginPage"
        meta={[
          { name: 'description', content: 'Description of LoginPage' },
        ]}
      />
    </div>
  );
}
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  push: React.PropTypes.func.isRequired,
  attemptLogin: React.PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LoginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    attemptLogin:(username,email,password) => dispatch(loginAction(username,email,password)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
