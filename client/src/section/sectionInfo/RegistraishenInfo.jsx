import InputEmailReg from 'components/Inputs/RegistraishenItems/InputEmailReg';
import InputPassReg from 'components/Inputs/RegistraishenItems/InputPassReg';
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registration } from 'store/features/userSlice';

export default function RegistraishenInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
    const user = useSelector((store)=> store.userReducer)

    console.log(user,localStorage.getItem('token'))
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registration({email:email,password:password}))
    };

    return (
        <section>
            <form action="" onSubmit={handleSubmit}>
                <label className="" htmlFor="email">
                    Mail: <InputEmailReg setEmail={setEmail} email={email}/>
                </label>
                <label className="" htmlFor="password">
                    Password: <InputPassReg password={password} setPassword={setPassword}/>
                </label>                
                <button className="" type="submit">Зарегистрироваться</button>
            </form>
        </section>
    )
}