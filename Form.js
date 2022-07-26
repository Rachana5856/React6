import React, { useState } from 'react'
import './Style.css'

const Form=()=> {
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [allentry, setEntry]=useState([])

const submitForm=(e)=>{
    e.preventDefault();
    const newEntry={ email:email, password:password };

    setEntry([...allentry, newEntry])
    console.log(allentry)
}
  return (
    <>
        <form onSubmit={submitForm} className="demo">
            <div>
                <label htmlFor='email'><b>Email:</b></label>
                <input type="text" autoComplete='off' name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <br></br>
            <div>
                <label htmlFor='password'><b>Password:</b> </label>
                <input type="password" autoComplete='off' name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <br></br>
            <button type='submit'>Submit</button>
        </form>

        <div>
            {
                allentry.map((curEle)=>{
                    return(
                        <div>
                            <p>{curEle.email}</p>
                            <p>{curEle.password}</p>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Form