import React, { useEffect, useState } from 'react'

function HooksCondition() {
    const [count, setcount]=useState(0);
    const [name, setname]=useState(0);

    useEffect(()=>{
        console.log("use Effect");
        //document.title=`clicked ${count} times `
    },[count])
  return (
    <div>
        <input type="text" value={name.value} onChange={e=>{setname({name:e.target.value})}}></input>
        <button onClick={()=>setcount(count+1)}>Click Me</button>
    </div>
  )
}

export default HooksCondition