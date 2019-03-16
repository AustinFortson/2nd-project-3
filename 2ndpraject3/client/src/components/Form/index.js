import React from 'react'

export const Form = ({props}) =>{
    return(
    <div className="row">
    <form className="col s12"></form>
    </div>)
    
}
export const Row = ({props}) =>{
    return(<div className="row"></div>)
}
export const Inputs4 = (placehold,name,handleChange,value,type) =>{
    return(
    <div className="input-field col s4">
    <input
    className="validate" placeholder={placehold}
    type={type}
    name={name}
    value={value}
    onChange={handleChange}
    />
    </div>)
}
export const Inputs6 = ({placehold,name,handleChange,value,type}) =>{
    return(
    <div className="input-field col s6">
    <input
    className="validate" placeholder={placehold}
    type={type}
    name={name}
    value={value}
    onChange={handleChange}
    />
    </div>)
}
export const Inputs12 = ({placehold,name,handleChange,value,type}) =>{
    return(
    <div className="input-field col s12">
    <input
    className="validate" placeholder={placehold}
    type={type}
    name={name}
    value={value}
    onChange={handleChange}
    />
    </div>)
    
}
export const Submit = ({handleSubmit}) =>{
    return(<input type="submit" value="Submit" onClick={handleSubmit} />)
}
