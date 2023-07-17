import BtnDistr from "components/Buttons/BtnDistr"
import InputDistr from "components/Inputs/InputDistr"
import React from "react"
import "style/footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__conteiner">
                <div className="footer__wrapper">
                    <div className="distribution">
                        <h1>Подпишитесь на E-mail рассылку</h1>
                        <h6>
                            Если хотиет быть в курсе последних новостей и новинок кино 
                            - заполните форму ниже и оформите бесплатную E-mail рассылку!
                        </h6>
                        <div className="">
                            <InputDistr />
                            <BtnDistr />
                        </div>
                    </div>
                    <p>09/07/2023 - по настоящие время © Nikita Vavilov.  Все права защищены</p>
                    <p>Политика конфиденциальности</p>
                </div>
            </div>
        </footer>
    )
}
