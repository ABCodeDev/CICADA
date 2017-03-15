/**
*
* FormBuilder
*
*/

import React from 'react';
import SimpleForm from '../SimpleForm/index';
import RaisedButton from 'material-ui/RaisedButton';

class FormBuilder extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);
    this.state = {ui:null,schemaStore:null,count:0}
    this.state.ui = [];
    this.state.schemaStore = [];
    this.pushtoParentState = this.pushtoParentState.bind(this);
    this.addSimpleForm = this.addSimpleForm.bind(this);
    this.forceUpdate = this.forceUpdate.bind(this);
  }

  pushtoParentState(object){
    this.state.schemaStore.push(object);
    this.forceUpdate();
  }

  addSimpleForm(){
    this.state.ui.push({key:this.state.count,type:"simple"});
    this.state.count = this.state.count+1;
    this.forceUpdate();
  }



  render() {
    console.log(this.state);
    const forms = this.state.ui.map((element)=>{
      if(element.type = "simple"){
        return <SimpleForm key={element.key} pushtoParentState={this.pushtoParentState} />
      }
    });

    return (
      <div>
        {forms}
        <RaisedButton style={{float:'right'}} onTouchTap={this.addSimpleForm}> Add Simple Form </RaisedButton>
      </div>
    );
  }
}

FormBuilder.propTypes = {

};

export default FormBuilder;
