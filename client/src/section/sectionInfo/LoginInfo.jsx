import InputCheckboxItem from 'components/Inputs/LogInItems/InputCheckboxItem';
import InputEmailItem from 'components/Inputs/LogInItems/InputEmailItem';
import InputPasswordItem from 'components/Inputs/LogInItems/InputPasswordItem';

import Facebook from "img/facebook.png"
import Twitter from "img/twitter.png"
import Google from "img/google.png"

import "style/styleLogin.css"
import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

export default function LoginInfo() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, remember })
            });
            if (response.ok) {
                // успешный вход в аккаунт, перенаправление на другую страницу
                window.location.href = '/dashboard';
            } else {
                // обработка ошибки
                const { message } = await response.json();
                throw new Error(message);
            }
        } catch (error) {
            console.error(error);
            alert('Произошла ошибка при входе в аккаунт. Попробуйте еще раз.');
        }
    };

    return (
        <div className='Login'>
            <form className="login-form" action="" onSubmit={handleSubmit}>
                <h1 className="login-heading">Login</h1>
                <label htmlFor="email" className="login-label">Email:</label>
                    <InputEmailItem className="login-input" setEmail={setEmail} email={email} />
                <label htmlFor="password" className="login-label">Пароль:</label>
                    <InputPasswordItem className="login-input" setPassword={setPassword} password={password} />
                <label htmlFor="remember" className="login-checkbox-label">
                    <InputCheckboxItem className="login-checkbox" setRemember={setRemember} remember={remember} />
                    Remember me
                </label>
                <div className="button-container">
                    <button type="submit" className="login-button">To come in</button>
                    <button type="submit" className="register-button">Register</button>
                </div>
                <div className="restore-password">
                    <p>Restore password</p>
                </div>
                <div className="social-links">
                    <li><NavLink className="social-link"><img src={Facebook} alt="Facebook" /></NavLink></li>
                    <li><NavLink className="social-link"><img src={Twitter} alt="Twitter" /></NavLink></li>
                    <li><NavLink className="social-link"><img src={Google} alt="Google" /></NavLink></li>
                </div>
            </form>
        </div>
    )
}
/*
*мой код
<div className='Login'>
    <form action="" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">Email:</label>
            <InputEmailItem setEmail={setEmail} email={email}/>
        <label htmlFor="password">Пароль:</label>
            <InputPasswordItem setPassword={setPassword} password={password}/>
        <label htmlFor="remember">
            <InputCheckboxItem setRemember={setRemember} remember={remember}/>
            Remember me
        </label>
        <div className="">
            <button type="submit">To come in</button>
            <button type="submit">Register</button>
        </div>
        <div className="">
            <p>Restore password</p>
        </div>
        <div className="">
            <li><NavLink><img src={ Facebook } alt="Facebook" /></NavLink></li>
            <li><NavLink><img src={ Twitter } alt="Twitter" /></NavLink></li>
            <li><NavLink><img src={ Google } alt="Google" /></NavLink></li>
        </div>
    </form>
</div>
*/