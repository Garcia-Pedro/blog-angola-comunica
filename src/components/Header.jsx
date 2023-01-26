/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";

/*------------ CSS ------------*/
import './css/header.scss';

export default (props) => {
    let [headerState, setState] = useState(false);

    const [active, tobbleMenu] = useState(false);

    function showMenu () {
        tobbleMenu(!active);
    }

    window.onscroll = () => {
        let top = window.scrollY;

        top > 50 ? setState(headerState = true) : setState(headerState = false);
    }

    return (
        <>
            <header className={headerState ? 'shadow' : ''}>
                <div className="header-contacts container">
                    <a  className="logoHero" href="/">
                        <img src={props.logoImage} alt="LOGO IMAGE" />
                    </a>

                    <div className="contacts">
                        <span>
                            <img src={props.emailIcon} alt="" />
                            angolacomunicablog@gmail.com
                        </span>
                        <span>
                            <img src={props.phoneIcon} alt="" />
                            +244 923 456 722
                        </span>
                    </div>

                    <a className = "signIn-button" href="/signUp">Cadastrar-se</a>

                    <div onClick = {showMenu} className="nav-hamburger">
                        <div className="bars">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>

                <nav className={active ? 'navbar show' : 'navbar' }>
                    <ul className="container">
                        {props.children}
                    </ul>
                    <a className = "signIn-button" href="/signUp">Cadastrar-se</a>
                </nav>
            </header>
        </>
    )
};