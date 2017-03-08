/**
*
* PageBase
*
*/

// import React from 'react';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import globalStyles from '../../styles';

const PageBase = (props) => {

  const {title, navigation} = props;

  return (
    <div>
      <span style={globalStyles.navigation}>{navigation}</span>

      <Paper style={globalStyles.paper}>
        <h3 style={globalStyles.title}>{title}</h3>

        <Divider/>
        {props.children}

        <div style={globalStyles.clear}/>

      </Paper>
    </div>
  );
};

PageBase.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.string,
  children: PropTypes.element
};


// class PageBase extends React.Component { // eslint-disable-line react/prefer-stateless-function
//   render() {
//     return (
//       <div>
//         <span style={globalStyles.navigation}>{navigation}</span>
//
//         <Paper style={globalStyles.paper}>
//           <h3 style={globalStyles.title}>{title}</h3>
//
//           <Divider/>
//           {props.children}
//
//           <div style={globalStyles.clear}/>
//
//         </Paper>
//       </div>
//     );
//   }
// }

export default PageBase;
