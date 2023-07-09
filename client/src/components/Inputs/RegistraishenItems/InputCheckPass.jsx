import React from 'react'

export default function InputCheckPass(props) {

    return (
        <div>
            <input 
                type="password" 
                name="passwordCheck"
                placeholder='Check password'
                value={props.passwordCheck}
                onChange={(event) =>props.setName(event.target.value)}
            />
        </div>
    )
}