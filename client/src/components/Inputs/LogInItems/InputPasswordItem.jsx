import React from 'react'

export default function InputPasswordItem(props) {
    return (
            <input
                className="login__input-password"
                placeholder='password'
                type="password"
                id="password"
                value={props.password}
                onChange={(e) =>props.setPassword(e.target.value)}
                required
            />
    )
}