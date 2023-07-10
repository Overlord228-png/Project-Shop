import React from 'react'

export default function InputEmailItem(props) {
    return (
        <input
            className="login__input-email"
            placeholder='email'
            type="email"
            id="email"
            value={props.email}
            onChange={(e) =>props.setEmail(e.target.value)} 
            required 
        />
    )
}