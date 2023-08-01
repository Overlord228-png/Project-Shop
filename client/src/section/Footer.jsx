import React from "react"
import { NavLink } from "react-router-dom"

import BtnDistr from "components/Buttons/BtnDistr"
import InputDistr from "components/Inputs/InputDistr"

import Linkedin from "img/free-icon-linkedin-2504923.png"
import Twitter from "img/free-icon-twitter-2504947.png"
import Telegram from "img/free-icon-telegram-2504941.png"
import GitHub from "img/free-icon-github-270798.png"

import "style/footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__conteiner">
                <div className="distribution">
                    <h1 className="text__title">Подпишитесь на E-mail рассылку</h1>
                    <p className="specification__text">
                        Если хотиет быть в курсе последних новостей и новинок кино 
                        - заполните форму ниже и оформите бесплатную E-mail рассылку!
                    </p>
                    <div className="distr__block">
                        <InputDistr />
                        <BtnDistr />
                    </div>
                </div>
                <div className="text__block">
                    <p className="text__start">09/07/2023 - по настоящие время © Nikita Vavilov. Все права защищены</p>
                    <p className="text__private">Политика конфиденциальности</p>
                </div>
                <div className="">
                    <ul>
                        <li>
                            <NavLink >
                                <img src={Linkedin} alt="Linkedin" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink >
                                <img src={Twitter} alt="Twitter" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink >
                                <img src={Telegram} alt="Telegram" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="https://github.com/Overlord228-png">
                                <img src={GitHub} alt="GitHub"/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}