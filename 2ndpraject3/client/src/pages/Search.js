import React from 'react'
import API from "../utils/API";
class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tools:[],
      catergory:"",
      name:"",
      subclass:"",
      four_hour:"",
      daily:"",
      weekly:"",
      deposit:""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    this.getTools();
  }
  getTools = () => {
    API.getTools()
    .then(res => this.setState({tools: res.data, catergory:"", name:"", subclass:"", four_hour:"", daily:"", weekly:"", deposit:""}))
    .catch(err => console.log(err))
  }
  handleChange(event) {
    const {name,value}  = event.target;
    this.setState({[name]: value})
  }

  render() {
    return(
      <div>
       <h1>Search</h1>
       {/* Displays the Search */}
       <div className="SearchBar">
       <form>
         <input type="text" placeholder="Search here .." name="search"/>
         <button type="submit"><i className="fa fa-search"></i></button>
       </form>
       </div>
       
      </div>
       )
  }
}

export default Search;