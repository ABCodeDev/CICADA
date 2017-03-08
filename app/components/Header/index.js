/**
*
* Header
*
*/

import React, {PropTypes} from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import {white} from 'material-ui/styles/colors';

class Header extends React.Component {

  render() {
    const {styles, handleChangeRequestNavDrawer} = this.props;

    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: 57
      },
      menuButton: {
        marginLeft: 10
      },
      iconsRightContainer: {
        marginLeft: 20
      }
    };

    return (
      <div>
        <AppBar
          style={{...styles, ...style.appBar}}

          iconElementLeft={
            <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
              <Menu color={white} />
            </IconButton>
          }

          iconElementRight={
            <div style={style.iconsRightContainer}>
              <IconMenu color={white}
                        iconButtonElement={
                          <IconButton><ViewModule color={white}/></IconButton>
                        }
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <MenuItem key={1} primaryText="Application 1"/>
                <MenuItem key={2} primaryText="Application 2"/>
                <MenuItem key={3} primaryText="Application 3"/>
              </IconMenu>
              <IconMenu color={white}
                        iconButtonElement={
                          <IconButton><MoreVertIcon color={white}/></IconButton>
                        }
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <MenuItem onTouchTap={this.props.signOutHandler} primaryText="Sign out"/>
              </IconMenu>
            </div>
          }
        />
      </div>
    );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func,
  signOutHandler : PropTypes.func
};

export default Header;

// class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
//   render() {
//     return (
//       <div>
//         <FormattedMessage {...messages.header} />
//       </div>
//     );
//   }
// }
