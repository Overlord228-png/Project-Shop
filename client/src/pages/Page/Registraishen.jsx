import InputEmailReg from "components/Inputs/RegistraishenItems/InputEmailReg"
import InputNameReg from "components/Inputs/RegistraishenItems/InputNameReg"
import InputPassReg from "components/Inputs/RegistraishenItems/InputPassReg"
import React, {useState} from "react"
import axios from "axios";
import InputCheckPass from "components/Inputs/RegistraishenItems/InputCheckPass";
import InputSurname from "components/Inputs/RegistraishenItems/InputSurname";
import InputUsername from "components/Inputs/RegistraishenItems/InputUsername";

export default function Registraishen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [isValid, setIsValid] = useState(false);
    
    const registraishen = async ()=>{
        const resp = await axios.post("http://localhost:5000/api/user/registration", {password: password, email: email, role:"ADMIN"})
        const token = resp.data.token
        localStorage.setItem('token',token)
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "password") setPassword(value);
        if (name === "passwordCheck") setPasswordCheck(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        registraishen()
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Регулярное выражение для проверки пароля
        setIsValid(regex.test(password) && password === passwordCheck);
    };
    return (
        <section>
            <form action="" onSubmit={handleSubmit}>
                <label className="">
                    Name: <InputNameReg setName={setName} name={name}/>
                </label>
                <label className="">
                    Surname: <InputSurname />
                </label>
                <label className="">
                    Create a username: <InputUsername />
                </label>
                <label className="" htmlFor="email">
                    Mail: <InputEmailReg setEmail={setEmail} email={email}/>
                </label>
                <label className="" htmlFor="password">
                    Password: <InputPassReg password={password} handleChange={handleChange}/>
                </label>
                <label className="" htmlFor="remember">
                    Confirm Password: <InputCheckPass passwordCheck={passwordCheck} handleChange={handleChange}/>
                    {isValid && <p>Passwords match and meet requirements!</p>}
                    {!isValid && <p>Passwords do not match or do not meet requirements.</p>}
                </label>
                <button className="" type="submit">Зарегистрироваться</button>
            </form>
        </section>
    )
}