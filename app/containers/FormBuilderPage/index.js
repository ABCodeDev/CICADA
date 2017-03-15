/*
 *
 * FormBuilderPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectResponsePage from './selectors';
import FormBuilder from '../../components/FormBuilder/index'

export class FormBuilderPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="ResponsePage"
          meta={[
            {name: 'description', content: 'Description of ResponsePage'},
          ]}
        />
        <FormBuilder/>
      </div>
    );
  }
}

FormBuilderPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ResponsePage: makeSelectResponsePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilderPage);
// export default TablePage;
