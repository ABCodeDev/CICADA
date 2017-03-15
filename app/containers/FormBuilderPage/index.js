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

const uiSchema = {
  foo: {
    bar: {
      "ui:widget": "textarea"
    },
  },
  baz: {
    // note the "items" for an array
    items: {
      description: {
        "ui:widget": "textarea"
      }
    }
  }
};



const log = (type) => console.log.bind(console, type);

function ArrayFieldTemplate(props) {
  return (
    <div>
      {props.items.map(element => element.children)}
      {props.canAdd && <button onClick={props.onAddClick}></button>}
    </div>
  );
}

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
          <div style={Index}>
            <div id="main">
              <Form schema={schema}
                    uiSchema={uiSchema}
                    onChange={log("changed")}
                    onSubmit={log("submitted")}
                    onError={log("errors")}
                    ArrayFieldTemplate={ArrayFieldTemplate}>
                <div>
                  <button type="submit">Submit</button>
                  <button type="button">Cancel</button>
                </div>
              </Form>
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
