import React from 'react'

export default function InputPassReg(props) {
    return (
        <div>
            <input 
                className=""
                type="password" 
                placeholder='Password'
                value={props.password}
                onChange={(e)=>props.setPassword(e.target.value)}
            />
        </div>
    )
}