/*
 *
 * FormBuilder
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectFormBuilder from './selectors';
import messages from './messages';
import ReactDOM from "react-dom";
import DemoBar from './demobar';
import FormBuilder from "../../components/indexForm/index";

// Add our stylesheets for the demo.
require('../../css/application.css.scss');

ReactDOM.render(
  <FormBuilder.ReactFormBuilder />,
  document.getElementById('form-builder')
);

ReactDOM.render(
  <DemoBar />,
  document.getElementById('demo-bar')
);

FormBuilder.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  formBuilder: makeSelectFormBuilder(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilder);
