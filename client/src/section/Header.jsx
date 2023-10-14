import "style/header.css"
import LogIn from "components/Buttons/LogIn";
import Registraishen from "components/Buttons/Registraishen";
import Logotip from "img/logotip.svg"
import User from "img/User2.png"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {logOut} from "store/features/userSlice"

export default function Header() {

    const user = useSelector((store)=> store.userReducer)
    const dispatch = useDispatch()

    const exitStore = async (e) => {
        e.preventDefault();
        dispatch(logOut())
    }

    return (
        <header className="header">
            <div className="header__conteiner">
                <div className="header__wrapper">
                    <a href="#" className="header__logo">
                        <img src={ Logotip } alt="logo" />
                    </a>
                    <nav className="header__menu">
                        <ul className="menu__list">
                            <li className="list__item">
                                <NavLink className="list__item-page" to="/shop">
                                    Shop
                                </NavLink>
                            </li>
                            <li className="list__item">
                                <NavLink className="list__item-page" to="/blog">
                                    Blog
                                </NavLink>
                            </li>
                            <li className="list__item">
                                <NavLink className="list__item-page" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                            <li className="list__item">
                                <NavLink className="list__item-page" to="/about">
                                    About us
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="btn__group">
                        <NavLink className="user__admin" to="/admin">
                            <img src={ User } alt="admin page" />
                        </NavLink>

                        {user.id != -1 ?
                        <>
                            <NavLink>
                                <p style={{color:"white"}}>{user.email}</p>
                            </NavLink>
                            <NavLink>
                                <button onClick={exitStore}>
                                    Log Out
                                </button>
                            </NavLink> 
                        </>
                            :
                        <>
                            <NavLink className="" to="/LogIn">
                                <LogIn />
                            </NavLink>
                            <NavLink className="" to="/Registraishen">
                                <Registraishen />
                            </NavLink>
                        </>}
                    </div>
                </div>
            </div>
        </header>
    )
}
