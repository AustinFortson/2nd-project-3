import React from 'react'
import API from "../utils/API";
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
  }
  componentDidMount(){

  }

  handleChange(event) {
    const {name,value}  = event.target;
    this.setState({[name]: value})
  }
  handleSubmit(event){
    event.preventDefault();
   
  }
    
  render() {
  
    return()

}

export default Login;