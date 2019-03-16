import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="row">
            <form className="col s12">{this.props.children}</form>
            </div>)
    }
    
}
class Row extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div className="row">{this.props.children}</div>)
    }
    
}
class Inputs4 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div className="input-field col s4">
        <input
        className="validate" placeholder={this.props.placehold}
        type={this.props.type}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.handleChange}
        />
        </div>)
            
        }
    
}
class Inputs6 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div className="input-field col s6">
        <input
        className="validate" placeholder={this.props.placehold}
        type={this.props.type}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.handleChange}
        />
        </div>)
            
        }
    
}
class Inputs12 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div className="input-field col s12">
        <input
        className="validate" placeholder={this.props.placehold}
        type={this.props.type}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.handleChange}
        />
        </div>)
            
        }
    
}
class Submit extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<input type="submit" value="Submit" onClick={this.props.handleSubmit} />)
    }
    
}
export {Form, Row, Inputs4, Inputs6, Inputs12, Submit}
