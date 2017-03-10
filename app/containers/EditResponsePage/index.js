/*
 *
 * EditResponsePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectEditResponsePage from './selectors';
import messages from './messages';
import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../../components/PageBase';

const styles = {
  toggleDiv: {
    maxWidth: 300,
    marginTop: 40,
    marginBottom: 5
  },
  toggleLabel: {
    color: grey400,
    fontWeight: 100
  },
  buttons: {
    marginTop: 30,
    float: 'right'
  },
  saveButton: {
    marginLeft: 5
  }
};

export class EditResponsePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render()
  {
    return (
      <PageBase title="Edit Response"
                navigation="Application / Form Page">
        <form>

          <TextField
            hintText="Name"
            floatingLabelText="Name"
            fullWidth={true}
          />

          <TextField
            hintText="Name"
            floatingLabelText="Name"
            fullWidth={true}
          />

          <TextField
            hintText="Name"
            floatingLabelText="Name"
            fullWidth={true}
          />

          <div style={styles.toggleDiv}>
            <Toggle
              label="Disabled"
              labelStyle={styles.toggleLabel}
            />
          </div>

          <Divider/>

          <div style={styles.buttons}>
            <Link to="/">
              <RaisedButton label="Cancel"/>
            </Link>

            <RaisedButton label="Save"
                          style={styles.saveButton}
                          type="submit"
                          primary={true}/>
          </div>
        </form>
      </PageBase>
    );
  }
}

EditResponsePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  editResponsePage: makeSelectEditResponsePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditResponsePage);



