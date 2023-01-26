import React from "react";

/*----------------- CSS -----------------*/
import './scss/SignIn.scss';

/*---------------- Images ------------------*/
import logoHero from '../assets/images/logo-hero.svg';

export default () => (
    <>
        <main className="signIn">
            <aside>
                <a href="/">
                    <img src={logoHero} alt="LOGO" />
                </a>
            </aside>

            <div className="main-form">
                <div className="form-area">
                    <h2>LOGIN</h2>
                    
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
                            value="Login"
                            type="submit" 
                            className="login-button" 
                         />
                        
                        <span>Ainda não possui uma conta? <a href="/signUp">Cadastre-se.</a></span>
                    </form>
                </div>

            </div>
        </main>
    </>
);
