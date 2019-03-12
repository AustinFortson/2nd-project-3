import React from 'react'
import API from "../utils/API";
class UserInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userdata:[],
      nameFirst: '',
      nameLast:'',
      nameAddress:'',
      nameCity:'',
      nameState:'',
      nameZipcode:'',
      nameEmail:'',
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){

  }

  handleChange(event) {
    const {name,value}  = event.target;
    this.setState({[name]: value})
  }
  handleSubmit(event){
    event.preventDefault();
    if (this.state.nameFirst && this.state.nameLast) {
      API.saveUser({
        nameFirst: this.state.nameFirst,
        nameLast: this.state.nameLast,
        nameAddress: this.state.nameAddress,
        nameCity: this.state.nameCity,
        nameState: this.state.nameState,
        nameZipcode: this.state.nameZipcode,
        nameEmail: this.state.nameEmail,
        })
        .then(res => this.setState({userdata: res.data}))
        .catch(err => console.log(err));
    }
  }
    
  render() {
  
    return( <div>
        <h1>Users</h1>
        <div className="row">
        <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
            className="validate" placeholder="First Name"
            type="text"
            name="nameFirst"
            value={this.state.nameFirst}
            onChange={this.handleChange}
            />
          </div>
          <div className="input-field col s6">
            <input
            className="validate" placeholder="Last Name"
            type="text"
            name="nameLast"
            value={this.state.nameLast}
            onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">

          </div>
        </div>
        <input
          className="validate" placeholder="Address"
          type="text"
          name="nameAddress"
          value={this.state.nameAddress}
          onChange={this.handleChange}
        />
        <div className="row">
          <div className="input-field col s4">
            <input
            className="validate" placeholder="City"
            type="text"
            name="nameCity"
            value={this.state.nameCity}
            onChange={this.handleChange}
            />
          </div>
          <div className="input-field col s4">
            <input
            className="validate" placeholder="State"
            type="text"
            name="nameState"
            value={this.state.nameState}
            onChange={this.handleChange}
            />
          </div>
          <div className="input-field col s4">
            <input
            className="validate" placeholder="Zipcode"
            type="number"
            name="nameZipcode"
            value={this.state.nameZipcode}
            onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
            className="validate" placeholder="Email"
            type="email"
            name="nameEmail"
            value={this.state.nameEmail}
            onChange={this.handleChange}
            />
          </div>
        </div>
        
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
        </div>
        </div>)
  }
}

export default UserInput;