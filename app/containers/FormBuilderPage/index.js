/*
 *
 * FormBuilderPage
 *
 */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { render } from "react-dom";
import Form from "react-jsonschema-form";
import Button from 'react-bootstrap/lib/Button';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectFormBuilderPage from './selectors';
import messages from './messages';

const schema = {
  type: "number",
  enum: [1, 2, 3],
  enumNames: ["one", "two", "three"]
};

const themes = {
  default: {
    stylesheet: "//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
  }
};

const log = (type) => console.log.bind(console, type);

render((
  <Form schema={schema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
), document.getElementById("app"));



FormBuilderPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  FormBuilderPage: makeSelectFormBuilderPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilderPage);
