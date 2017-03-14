/*
 *
 * RegisterPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import selectGlobal from '../App/selectors'
import { push } from 'react-router-redux';
import makeSelectRegisterPage from './selectors';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { grey500, white } from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';
import { registerAuthRequest, registerProfileRequest } from './actions';

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

export class RegisterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);
    this.state = {username: null, email: null, password: null, password2: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event,value) {
    if(event.target.name == "username"){
      const username = value;
      console.log(username);
      this.setState(Object.assign(this.state,{username: username}));
    } else if (event.target.name == "email"){
      const email = value;
      console.log(email);
      this.setState(Object.assign(this.state,{email: email}));
    } else if (event.target.name == "password"){
      const password = value;
      console.log(password);
      this.setState(Object.assign(this.state,{password: password}));
    } else if (event.target.name == "password2"){
      const password2 = value;
      console.log(password2);
      this.setState(Object.assign(this.state,{password2: password2}));
    } else if (event.target.name == "bio"){
      const bio = value;
      console.log(bio);
      this.setState(Object.assign(this.state,{bio: bio}));
    } else if (event.target.name == "ktp_no"){
      const ktp_no = value;
      console.log(ktp_no);
      this.setState(Object.assign(this.state,{ktp_no: ktp_no}));
    } else if (event.target.name == "npwp_no"){
      const npwp_no = value;
      console.log(npwp_no);
      this.setState(Object.assign(this.state,{npwp_no: npwp_no}));
    } else if (event.target.name == "phone_no"){
      const phone_no = value;
      console.log(phone_no);
      this.setState(Object.assign(this.state,{phone_no: phone_no}));
    } else if (event.target.name == "birth_date"){
      const birth_date = value;
      console.log(birth_date);
      this.setState(Object.assign(this.state,{birth_date: birth_date}));
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.props.registerPage.registerAuthSuccess) {
      this.props.registerAuthRequest({username: this.state.username, email: this.state.email, password: this.state.password, password2: this.state.password2});
    } else {
      this.props.registerProfileRequest({bio: this.state.bio, ktp_no: this.state.ktp_no, npwp_no: this.state.npwp_no, phone_no: this.state.phone_no, birth_date: this.state.birth_date});
    }
  }

  render() {
    const registerAuthSuccess = this.props.registerPage.registerAuthSuccess;

    return (
      <div>
        <Helmet
          title="Register"
          meta={[
            { name: 'description', content: 'Description of LoginPage' },
          ]}
        />
        <div>
          <div style={styles.loginContainer}>

            <Paper style={styles.paper}>

              <form>
                <div>
                  {
                    registerAuthSuccess == false &&
                    <div>
                      <TextField
                        name="username"
                        hintText="Username"
                        fullWidth={true}
                        onChange={this.handleChange}
                      />
                      <TextField
                      name="email"
                      hintText="email"
                      fullWidth={true}
                      onChange={this.handleChange}
                      />
                      <TextField
                      name="password"
                      hintText="password"
                      fullWidth={true}
                      type="password"
                      onChange={this.handleChange}
                      />
                      <TextField
                      name="password2"
                      hintText="Password2"
                      fullWidth={true}
                      type="password"
                      onChange={this.handleChange}
                      />
                    </div>
                  }
                  {
                    registerAuthSuccess == true &&
                    <div>
                      <TextField
                        name="bio"
                        hintText="Bio"
                        fullWidth={true}
                        onChange={this.handleChange}
                      />
                      <TextField
                        name="ktp_no"
                        hintText="No. KTP"
                        fullWidth={true}
                        onChange={this.handleChange}
                      />
                      <TextField
                        name="npwp_no"
                        hintText="No. NPWP"
                        fullWidth={true}
                        onChange={this.handleChange}
                      />
                      <TextField
                        name="phone_no"
                        hintText="Phone"
                        fullWidth={true}
                        onChange={this.handleChange}
                      />
                      <TextField
                        name="birth_date"
                        hintText="Birth Date"
                        fullWidth={true}
                        onChange={this.handleChange}
                      />
                    </div>
                  }
                  <Link to="/">
                    <RaisedButton label="Register"
                                  primary={true}
                                  style={styles.loginBtn}
                                  onClick={this.handleSubmit}
                    />
                  </Link>
                </div>
              </form>
            </Paper>

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

RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  registerAuthRequest: PropTypes.func.isRequired,
  push: React.PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  registerPage: makeSelectRegisterPage(),
  global: selectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    registerAuthRequest:(auth)=>dispatch(registerAuthRequest(auth)),
    registerProfileRequest:(profile)=>dispatch(registerProfileRequest(profile)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
