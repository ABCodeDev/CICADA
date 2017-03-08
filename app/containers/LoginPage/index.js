/*
 *
 * LoginPage
 *
 */

import { selectLoginFailed } from './selectors';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectLoginPage from './selectors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';
import {loginAction} from './actions';

const styles = {
  loginContainer: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  paper: {
    padding: 20,
    overflow: 'auto'
  },
  buttonsDiv: {
    textAlign: 'center',
    padding: 10
  },
  flatButton: {
    color: grey500
  },
  checkRemember: {
    style: {
      float: 'left',
      maxWidth: 180,
      paddingTop: 5
    },
    labelStyle: {
      color: grey500
    },
    iconStyle: {
      color: grey500,
      borderColor: grey500,
      fill: grey500
    }
  },
  loginBtn: {
    float: 'right'
  },
  btn: {
    background: '#4f81e9',
    color: white,
    padding: 7,
    borderRadius: 2,
    margin: 2,
    fontSize: 13
  },
  btnFacebook: {
    background: '#4f81e9'
  },
  btnGoogle: {
    background: '#e14441'
  },
  btnSpan: {
    marginLeft: 5
  },
};

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function


  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event,value) {
    console.log(event.target);
    console.log(event.target.name);
    if(event.target.name == "username"){
      const username = value;
      console.log(username);
      this.setState(Object.assign(this.state,{username:username}));
    }else {
      const password = value;
      console.log(password);
      this.setState(Object.assign(this.state, {password: password}));
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    console.log(this.state.username, this.state.password);
    this.props.loginAction(this.state.username,"",this.state.password);
  }


  render() {
    const failedAttempt = this.props.LoginPage.failedAttempt;
    console.log("RENDER");
    return (
      <div>
        <Helmet
          title="LoginPage"
          meta={[
            { name: 'description', content: 'Description of LoginPage' },
          ]}
        />
          <div>
            <div style={styles.loginContainer}>

              <Paper style={styles.paper}>

                <form>
                  <TextField
                    name="username"
                    hintText="E-mail"
                    fullWidth={true}
                    onChange={this.handleChange}
                  />
                  <TextField
                    name="password"
                    hintText="Password"
                    fullWidth={true}
                    type="password"
                    onChange={this.handleChange}
                  />

                  <div>


                    <Link to="/">
                      <RaisedButton label="Login"
                                    primary={true}
                                    style={styles.loginBtn}
                                    onClick={this.handleSubmit}
                      />
                    </Link>
                  </div>
                </form>
              </Paper>

              {
                failedAttempt == true &&
                    <h2>Incorrect username or password</h2>
              }

              <div style={styles.buttonsDiv}>
                <FlatButton
                  label="Register"
                  href="/"
                  style={styles.flatButton}
                  icon={<PersonAdd />}
                />

                <FlatButton
                  label="Forgot Password?"
                  href="/"
                  style={styles.flatButton}
                  icon={<Help />}
                />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loginAction:PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LoginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    loginAction:(username,email,password)=>dispatch(loginAction(username,email,password)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
