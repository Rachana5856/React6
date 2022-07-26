import React, { Component } from 'react'
import { Provider } from './Context'
import B1 from './B1'
import C1 from './C1'

export class A1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Rachana",
         rollno:22
      }
    }
      onchangeHandler=()=>{
        this.setState({rollno:this.state.rollno +1})
      }
    
  render() {
    const contextprovider={
        data:this.state,
        handlecheck:this.onchangeHandler,
    }
    return (
      <div>
        <Provider value={contextprovider}>
            <B1></B1>
            <C1></C1>
        </Provider>
      </div>
    )
  }
}

export default A1