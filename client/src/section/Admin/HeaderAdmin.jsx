import { NavLink } from "react-router-dom"
import React from "react"
import "style/headerAdmin.css"
import Users from "img/User2.png"
import Logotip from "img/logotip.svg"

export default function HeaderAdmin() {
    return (
        <header className="header__admin">
            <div className="header__conteiner-admin">
                <div className="header__wrapper">
                    <a href="#" className="">
                        <img src={Logotip} alt="logo" className="logo__img"/>
                        <img src={Users} alt="user" className=""/>
                    </a>
                    <nav className="">
                        <ul className="">
                            <li className="">
                                <NavLink className="" to="/admin/ProductPage">
                                    Product
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink className="" to="/admin/BrandPage">
                                    Brand
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink className="" to="/admin/TypePage">
                                    Type
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}