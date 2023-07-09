import { NavLink } from "react-router-dom"
import React from "react"
import "style/headerAdmin.css"
import Users from "img/users.svg"
import Logotip from "img/logotip.svg"

export default function HeaderAdmin() {
    return (
        <header className="">
            <div className="">
                <div className="">
                    <a href="#" className="">
                        <img src={Logotip} alt="logo" className=""/>
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
                                <NavLink className="l" to="/admin/TypePage">
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