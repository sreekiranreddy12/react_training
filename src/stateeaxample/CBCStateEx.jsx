import React, { Component } from 'react'

export default class CBCStateEx extends Component {
    constructor(){
        super();
        this.state={
            users:["kiran","chetan","nithish","bob","sunny"],
            num : 100,
        };
    }
    changeNumber=()=>{
        this.setState({num:(this.state.num+100)})
    }
  render() {
    console.log(this)
    return (
      <div>
        {
            this.state.users.map((user,i)=>{
            return <li key = {i}>{user}</li>
            })
        }
        <h1>{this.state.num}</h1>
        <button onClick={this.changeNumber}>Change Number</button>
      </div>
    )
  }
}
