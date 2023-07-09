import React from 'react'

export default function InputPassReg(props) {
    return (
        <div>
            <input 
                className=""
                type="password" 
                name="passwordCheck" 
                placeholder='Password'
                value={props.password}
                onChange={(e)=>props.handleChange(e.target.value)}
            />
        </div>
    )
}