import React from 'react'

class UserInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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

  handleChange(event) {
    const {name,value}  = event.target;
    this.setState({[name]: value})
  }
  handleSubmit(event){
    event.preventDefault();
  }
    
  render() {
  
    return( <div>
        <h1>Users</h1>
        <form>
        <input 
          type="text"
          name="nameFirst"
          value={this.state.nameFirst}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="nameLast"
          value={this.state.nameLast}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="nameAddress"
          value={this.state.nameAddress}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="nameCity"
          value={this.state.nameCity}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="nameState"
          value={this.state.nameState}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="nameZipcode"
          value={this.state.nameZipcode}
          onChange={this.handleChange}
        />
        <input
          type="email"
          name="nameEmail"
          value={this.state.nameEmail}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" onClick={this} />
        </form>

        <h2>{this.state.nameFirst}</h2>
        <h2>{this.state.nameLast}</h2>
        <h2>{this.state.nameZipcode}</h2>
        <h2>{this.state.nameEmail}</h2>
        <h2>{this.state.nameFirst}</h2>
        </div>)
  }
}

export default UserInput;