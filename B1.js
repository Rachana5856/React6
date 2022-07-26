import React, { Component } from 'react'
import { Consumer } from './Context'
export class B1 extends Component {
  render() {
    return (      
        <Consumer>
            {({data, handlecheck}) => (
                <div>
                    <h3>
                        {data.rollno}<br></br>
                        {data.name}
                    </h3>
                   <button onClick={handlecheck}>Submit</button>
                </div>
            )}
            
        </Consumer>      
    )
  }
}

export default B1