import InputCheckboxItem from 'components/Inputs/LogInItems/InputCheckboxItem';
import InputEmailItem from 'components/Inputs/LogInItems/InputEmailItem';
import InputPasswordItem from 'components/Inputs/LogInItems/InputPasswordItem';
import RegisterBtn from 'components/Buttons/RegisterBtn';

import Facebook from "img/facebook.png"
import Twitter from "img/free-icon-twitter-2504947.png"
import Google from "img/google.png"

import "style/styleLogin.css"
import React, {useEffect, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import {login} from 'store/features/userSlice';

export default function LoginInfo() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const user = useSelector((store)=> store.userReducer)
    ///console.log(user,localStorage.getItem('token'))
    
    useEffect(()=>{
        if(user.id != -1){
            navigate("/")
        } else {
            console.log("error")
        }
    },[user])

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(login({email:email,password:password}))
        if (remember) {
            localStorage.setItem('token', 'your-auth-token-goes-here');
        } else {
            localStorage.removeItem('token');
        }
    };

    return (
        <section className='Login'>
            <form className="login-form" action="" onSubmit={handleSubmit}>
                <h1 className="login-heading">Login</h1>
                <label htmlFor="email" className="login-label">Email:</label>
                    <InputEmailItem setEmail={setEmail} email={email} />
                <label htmlFor="password" className="login-label">Пароль:</label>
                    <InputPasswordItem setPassword={setPassword} password={password} />
                <label htmlFor="remember" className="login-checkbox-label">
                    <InputCheckboxItem setRemember={setRemember} remember={remember} />
                    Remember me
                </label>
                <div className="button-container">
                    <button type="submit" className="login-button">To come in</button>
                    <RegisterBtn />
                </div>
                <div className="restore-password">
                    <p>Restore password</p>
                </div>
                <div className="social-links">
                    <li><NavLink className="social-link"><img src={Facebook} alt="Facebook"/></NavLink></li>
                    <li><NavLink className="social-link"><img src={Twitter} alt="Twitter"/></NavLink></li>
                    <li><NavLink className="social-link"><img src={Google} alt="Google"/></NavLink></li>
                </div>
            </form>
        </section>
    )
}