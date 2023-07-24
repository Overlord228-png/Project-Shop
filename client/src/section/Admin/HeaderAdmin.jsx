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
                    </a>
                    <nav className="admin__menu">
                        <ul className="admin__list">
                            <li className="list__item">
                                <NavLink className="list__item-page" to="/admin/ProductPage">
                                    Product
                                </NavLink>
                            </li>
                            <li className="list__item">
                                <NavLink className="list__item-page" to="/admin/BrandPage">
                                    Brand
                                </NavLink>
                            </li>
                            <li className="list__item">
                                <NavLink className="list__item-page" to="/admin/TypePage">
                                    Type
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <a href="#">
                        <img src={Users} alt="user" className="user__avatar"/>
                    </a>
                </div>
            </div>
        </header>
    )
}