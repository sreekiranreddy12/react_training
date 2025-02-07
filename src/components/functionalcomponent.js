import React from 'react'



export const FunctionalComponent = (props) => {
    console.log(props);
    let applyStyle = props.apply ? 'heading':''
    let inlineStyle = {
        color:'green',
        backgroundColor: 'red',
        fontSize:'50px'
    }
  return (
    <div>
       <h1 class={'${applyStyle} font-style'}>welcome to mru {props.clgName},{props.area}</h1>
       <h2 style={inlineStyle}>Good afternoon</h2>
    </div>
  )
}
export default FunctionalComponent