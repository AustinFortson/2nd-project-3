import React from 'react'
import API from "../utils/API";
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  
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
  
    return("<div>")

  }
}
export default Login;