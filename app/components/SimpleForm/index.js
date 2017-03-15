/**
*
* SimpleForm
*
*/

import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem';


class SimpleForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

      constructor(props){
        super(props);
        this.state = {title:null, type:null, value:null};
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event,key,payload,value) {
        if (event.target.name == "title") {
          this.state.title == value;
        } else {
          if (key == 0) {
            this.state.type = 'string';
            this.state.value = 'string';
          }

          if (key == 1) {
            this.state.type = 'integer';
            this.state.value = 'integer';
          }

        }

        this.props.pushtoParentState({title:this.state.title, type:this.state.type});
      }

  render(){
    const type = ['string','integer'];
    return (
      <div>
        <h3>Title</h3>
        <TextField
          name="title"
          onChange={this.handleChange}
        />
        <h3>Type</h3>
        <SelectField
          value={this.state.value}
          multiple={false}
          onChange={this.handleChange}
        >
          <MenuItem
            key={0}
            value={"string"}
            primaryText={"string"}
          />
          <MenuItem
            key={1}
            value={"integer"}
            primaryText={"integer"}
          />
        </SelectField>
      </div>
    );
  }
}

SimpleForm.propTypes = {
};

export default SimpleForm;
