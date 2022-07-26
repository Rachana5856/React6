import React, { Component } from 'react'
import {mycontext} from './A'

export class B extends Component {
  render() {
    return (
      <div><mycontext.Consumer>
        {data=><h3>{data.name}</h3>}
        </mycontext.Consumer></div>
    )
  }
}

export default B