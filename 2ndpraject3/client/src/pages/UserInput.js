import React from 'react'

class UserInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            FirstName: '',
            LastName:'',
            Address:'',
            City:'',
            State:''
            }
        this.handleChange = this.handleChange.bind(this)
      }
    
      handleChange(event) {
        this.setState({ value: event.target.value })
      }
  render() {
    return( <div>
        <h1>Users</h1>
        <form>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
        </form>
        </div>)
  }
}

export default UserInput;