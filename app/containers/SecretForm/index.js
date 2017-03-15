/*
 *
 * SecretForm
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectSecretForm from './selectors';
import Form from 'react-jsonschema-form';
import { fetchCurrentForm ,sendCurrentResponse} from './actions';


export class SecretForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    console.log("fetch");
    this.props.fetch();
  }

  onSubmit({formData}){
    this.props.send(formData);
  }

  render() {
    const form = JSON.parse(this.props.SecretForm.form);
    if(form!=null){
      return(
      <div>
        <Helmet
          title="SecretForm"
          meta={[
            {name: 'description', content: 'Description of SecretForm'},
          ]}
        />
        <div><Form schema={form}
                   onChange={console.log("changed")}
                   onSubmit={this.onSubmit}
                   onError={console.log("errors")} /></div>

      </div>
      )
    }else{
      return (
        <div>
          <Helmet
            title="SecretForm"
            meta={[
              {name: 'description', content: 'Description of SecretForm'},
            ]}
          />
        </div>
      );
    }
  }
}

SecretForm.propTypes = ({
  dispatch: PropTypes.func.isRequired,
});

const mapStateToProps = createStructuredSelector({
  SecretForm: makeSelectSecretForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetch:() => dispatch(fetchCurrentForm()),
    send:(response) => dispatch(sendCurrentResponse(response)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SecretForm);
