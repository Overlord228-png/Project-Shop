import React from 'react'

export default function InputCheckboxItem(props) {
    return (
        <input
            type="checkbox"
            id="remember" 
            className="login-checkbox"
            checked={props.remember} 
            onChange={(e) =>props.setRemember(e.target.checked)} 
        />
    )
}