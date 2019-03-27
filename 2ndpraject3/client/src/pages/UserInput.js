import React from 'react'
import API from "../utils/API";
import { Redirect } from 'react-router-dom'
import {Form,Row,Inputs12,Inputs6,Inputs4,Submit} from "../components/Form/index"
import { Modal } from '@material-ui/core';
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
      nameDOB:'',
      nameDriverNum:'',
      nameDriverExp:'',
      nameDriverState:'',
      redirect:true
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.renderRedirect = this.renderRedirect.bind(this);

  }
  componentDidMount(){

  }

  handleChange(event) {
    const {name,value}  = event.target;
    this.setState({[name]: value})
  }
  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to='/search/' />
    }
  }
  handleSubmit(event){
    event.preventDefault();
    if (this.state.nameFirst && this.state.nameLast ) {
      API.saveUser({
        nameFirst: this.state.nameFirst,
        nameLast: this.state.nameLast,
        nameAddress: this.state.nameAddress,
        nameCity: this.state.nameCity,
        nameState: this.state.nameState,
        nameZipcode: this.state.nameZipcode,
        nameEmail: this.state.nameEmail,
        nameDOB: this.state.nameDOB,
        nameDriverNum: this.state.nameDriverNum,
        nameDriverExp: this.state.nameDriverExp,
        nameDriverState: this.state.nameDriverState
        })
        .then(res => this.setState({userdata: res.data, redirect: true}))
        .catch(err => console.log(err));
    }
  }
    
  render() {
    console.log(this.state.nameDriverState)

    return( <div id="wholeForm">
      {/*Tool Rental Logo*/}
      <div id="LogoDiv">
      <img src="https://compactpowerrents.com/media/2300/logo_cperrent.png" alt="ToolRentalLogo" id="ToolRentalLogo"/>
      <div id="headerLow"></div>
      </div>

      <div class="container" id="userForm">
      {/*User Logo*/}
      <img src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/Tool_and_Truck_Rental/Truck_Rental/do-qualify.gif" alt="UserLogo" id="UserLogo"/>
      <h5>Enter Your Information Below and Click Submit</h5>
      <Form>
        <Row>
          <Inputs6 placehold="First Name" name="nameFirst" type="text" value={this.state.nameFirst} handleChange={this.handleChange}/>
          <Inputs6 placehold="First Last" name="nameLast" type="text" value={this.state.nameLast} handleChange={this.handleChange}/>
        </Row>
        <Row>
          <Inputs12 placeholder="Address" type="text" name="nameAddress" value={this.state.nameAddress} handleChange={this.handleChange}/>
        </Row>
        <Row>
          <Inputs4 placehold="City" type="text" name="nameCity" value={this.state.nameCity} handleChange={this.handleChange}/>
          <Inputs4 placehold="State" type="text" name="nameState" value={this.state.nameState} handleChange={this.handleChange}/>
          <Inputs4 placehold="Zipcode" type="number" name="nameZipcode" value={this.state.nameZipcode} handleChange={this.handleChange}/>
        </Row>
        <Row>
          <Inputs12 placehold="Email" type="email" name="nameEmail" value={this.state.nameEmail} handleChange={this.handleChange}/>
        </Row>
        <Row><label>Date of Birth</label>
        <Inputs4 placehold="Date of Birth" type="date" name="nameDOB" value={this.state.nameDOB} handleChange={this.handleChange}/>
        </Row>
        <Row>
          <Inputs4 placehold="Driver License Number" type="number" name="nameDriverNum" value={this.state.nameDriverNum} handleChange={this.handleChange}/>
          <label>Driver License Expiration Date</label>
          <Inputs4 placehold="Driver License Expiration Date" type="date" name="nameDriverExp" value={this.state.nameDriverExp} handleChange={this.handleChange}/>
          <Inputs4 placehold="Driver License State" type="text" name="nameDriverState" value={this.state.nameDriverState} handleChange={this.handleChange}/>
        </Row>
        <Submit handleSubmit={this.handleSubmit}/>
        <a href="/search">
        <p id="searchTools">Search For Tools</p>
          </a>
      </Form>
      </div>
        </div>
        )
  }
}

export default UserInput;