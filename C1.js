import React, { Component } from 'react'
import { Consumer } from './Context'

export class C1 extends Component {
  render() {
    return (
     <Consumer>
        {
            ({data,handlecheck})=>(
                <div>
                    <h1>
                        {data.name}<br>
                        </br>
                        {data.rollno}
                        <br></br>
                        <button onClick={handlecheck}>Click Me</button>
                    </h1>
                </div>
            )
        }
     </Consumer>
    )
  }
}

export default C1