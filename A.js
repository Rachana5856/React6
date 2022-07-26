import React, { Component } from 'react'
import B from './B'
import C from './C';
export const mycontext=React.createContext();

export class A extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Rachana",
         roll:22
      }
    }
  render() {
    return (
      <div>
        <mycontext.Provider value={this.state}>
            <B></B>
            <C></C>
        </mycontext.Provider>
      </div>
    )
  }
}

export default A