import React from 'react'

export default function FCBStateEx() {
    const [value, setValue] = React.useState(0)
    console.log(value);
    const changevalue = () => {
        setValue(1000)
    }
  return (
    <div>FCBStateEx
        <h1>{value}</h1>
        <button onClick={changevalue}> changevalue</button>
      
    </div>
  )
}
