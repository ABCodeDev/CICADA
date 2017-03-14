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
import PageBase from '../../components/PageBase';
import Index from "react-bootstrap/lib/index";
import Form from "react-jsonschema-form";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

const styles = {
  floatingActionButton: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
  columns: {
    id: {
      width: '10%'
    },
    name: {
      width: '40%'
    },
    price: {
      width: '20%'
    },
    category: {
      width: '20%'
    },
    edit: {
      width: '10%'
    }
  }
};

const log = (type) => console.log.bind(console, type);

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
        <PageBase title="Table Page"
                  navigation="Application / Table Page">
          <div style={Index} class="container">
            <div id="main">
              <Form schema={schema}
                    onChange={log("changed")}
                    onSubmit={log("submitted")}
                    onError={log("errors")} />
            </div>
          </div>
        </PageBase>
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
