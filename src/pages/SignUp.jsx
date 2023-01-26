import React from "react";

/*----------------- CSS -----------------*/
import './scss/SignUp.scss';

/*---------------- Images ------------------*/
import logoHero from '../assets/images/logo-hero.svg';

export default () => (
    <>
        <main className="signUp">
            <aside>
                <a href="/">
                    <img src={logoHero} alt="LOGO" />
                </a>
            </aside>

            <div className="main-form">
                <div className="form-area">
                    <h2>Cadastre-se.</h2>
                    
                    <form action="">
                        <input 
                            type="email" 
                            placeholder="Degite seu email" 
                        />

                        <input 
                            type="password" 
                            placeholder="Degite sua senha" 
                        />

                        <input 
                            type="password" 
                            placeholder="Confirmar senha" 
                        />
                        
                        <input 
                            value="Cadastrar"
                            type="submit" 
                            className="signUp-button" 
                         />
                        
                        <span>Já possui uma conta? Faça <a href="/signIn">login.</a></span>
                    </form>
                </div>

            </div>
        </main>
    </>
);
