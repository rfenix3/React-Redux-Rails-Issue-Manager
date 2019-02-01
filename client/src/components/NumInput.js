import React from 'react'; 
import PropTypes from 'prop-types';

export default class NumInput extends React.Component {
  constructor( props) {
    super( props);         
    // format the number into string as you assign props to state
    this.state = { value: this.format( props.value) };
    this.onBlur = this.onBlur.bind( this);
    this.onChange = this.onChange.bind( this);    
  }     
  
  UNSAFE_componentWillReceiveProps( newProps) {
    this.setState({ value: this.format( newProps.value) });    
  }     
  
  // Return to original format (number) once input field is defocused
  onBlur(e) {
    this.props.onChange( e, this.unformat( this.state.value));    
  }     

  onChange(e) {         
    // change state (and display) only if input is a number
    if (e.target.value.match(/^\d*$/)) {             
      this.setState({ value: e.target.value });        
    }    
  }     
  
  // Convert number to string
  format(num) {
    return num != null ? num.toString() : '';    
  }     
  
  // convert string to number (base 10)
  unformat( str) {         
    const val = parseInt( str, 10);         
    return isNaN( val) ? null : val;    
  }     
  
  render() {         
    return (             
      < input                 
        type ="text" {... this.props} value ={this.state.value}
        onBlur ={this.onBlur} onChange ={this.onChange}            
      />        
    );    
  } 
} 

// Data type: Number validation
NumInput.propTypes = {
  value: PropTypes.number,     
  onChange: PropTypes.func.isRequired, 
};

