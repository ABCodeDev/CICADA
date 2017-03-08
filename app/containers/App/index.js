/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import {logOut} from './action';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600, grey900} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from '../../components/Header';
import LeftDrawer from '../../components/Sidebar';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import selectGlobal from './selectors';

//navbar icons
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';


const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: blue600
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: blue600,
  }
});


class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  constructor(props)
  {
    super(props);
    this.state = {
        navDrawerOpen: false
      };

    this.onSignOutHandler = this.onSignOutHandler.bind(this);
      injectTapEventPlugin();
  }

  static propTypes = {
    children: React.PropTypes.node,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  onSignOutHandler(event){

  }

  render() {

    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;
    const loggedIn = this.props.loggedIn;

    const menus = {
      default_menu : [
          { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
          { text: 'Form Page', icon: <Web/>, link: '/form' },
          { text: 'Table Page', icon: <GridOn/>, link: '/table' },
          { text: 'Login Page', icon: <PermIdentity/>, link: '/loginpage' }
        ]
    }

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
              },
          container: {
          margin: '80px 20px 20px 15px',
          paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
        }
          };



          return (
          <MuiThemeProvider muiTheme={themeDefault}>
            <div>
              {
                loggedIn == true &&
                <div><Header styles={styles.header} handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

                  <LeftDrawer navDrawerOpen={navDrawerOpen}
                              menus={menus.default_menu}
                              username="User Admin"
                              signOutHandler={this.onSignOutHandler}
                  /></div>
          }
          <div style={styles.container}>
            {React.Children.toArray(this.props.children)}
          </div>
        </div>
      </MuiThemeProvider>

    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

const mapStateToProps = selectGlobal();

function mapDispatchToProps(dispatch) {
  return {
    logOut:()=>dispatch(logOut()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
