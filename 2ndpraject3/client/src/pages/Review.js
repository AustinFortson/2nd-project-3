import React from 'react';
import Form from '../components/Form/index'

class Review extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:'',
      array:[]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  
}
  componentDidMount(){
    var local = localStorage.getItem("cart")
    console.log(local)
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChange2(event) {
    const {name,value}  = event.target;
    this.setState({[name]: value})
  }
  handleSubmit(event){
    event.preventDefault();
   
  }
    
  render() {
    
    return(<div>
    <h1>Review</h1>
    <Form>
    <label>
          Pick your rental time
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="4">Grapefruit</option>
            <option value="24">Lime</option>
            <option value="48">Coconut</option>
          </select>
        </label>
      
    </Form>
    </div>)
  }
}

export default Review;