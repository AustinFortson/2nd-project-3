import React from 'react'
import API from "../utils/API";
import Button from '@material-ui/core/Button';

class Welcome extends React.Component {

 constructor(props){
   super(props);
   this.state = {}
 }
 render() {

   return(

       <div id="welcomeBG">

       <img id="welcomeH" src="https://corporate.homedepot.com/sites/default/files/styles/hero/public/image_gallery/Homer_Header.png?itok=YmsccXh1" ></img>

       <div id="getStart">
       <h1>Welcome to the Home Depot Tool Rental Application</h1>
       </div>

       </div>

   )
 }
}

export default Welcome;