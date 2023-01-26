/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { Link } from "react-router-dom";

/*------------- CSS -------------*/
import "./scss/Blog.scss";

/*--------- Components ---------*/
import Title from "../components/Title";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Partner from "../components/Partner";
import Categories from "../components/Categories";
import ArticleCard from "../components/ArticleCard";

/*----------- Images -----------*/
import logoHero from "../assets/images/logo-hero.svg";

/*----------- Icons -----------*/
import emailIcon from "../assets/images/icons/icons8_mail.svg";
import emailIconW from "../assets/images/icons/icons8_mail_1.svg";
import twitterIcon from "../assets/images/icons/icons8_Twitter.svg";
import phoneIcon from "../assets/images/icons/icons8_sip_dialer.svg";
import phoneIconW from "../assets/images/icons/icons8_sip_dialer_1.svg";
import instagarmIcon from "../assets/images/icons/icons8_instagram.svg";
import facebookIcon from "../assets/images/icons/icons8_facebook_circled.svg";

export default () => {
  let [fadeState, setFadeState] = useState(false);

  window.addEventListener("scroll", () => {
    let top = window.scrollY;

    top > 50
      ? setFadeState((fadeState = true))
      : setFadeState((fadeState = false));

    if (fadeState) {
      const faders = document.querySelectorAll(".fade-in");
      const sliders = document.querySelectorAll(".slide-in");

      const appearOptions = {
        treshold: 0,
        rootMargin: "0px 0px -100px 0px",
      };

      const appearOnScroll = new IntersectionObserver(
        (entries, appearOnScroll) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              return;
            } else {
              entry.target.classList.add("appear");
              appearOnScroll.unobserve(entry.target);
            }
          }
        },
        appearOptions
      );

      for (const fader of faders) {
        appearOnScroll.observe(fader);
      }
      for (const slider of sliders) {
        appearOnScroll.observe(slider);
      }
    }
  });

  return (
    <>
      <main>
        <Header
          logoImage={logoHero}
          emailIcon={emailIcon}
          phoneIcon={phoneIcon}
        >
          <li>
            <Link to={`/`}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to={`/blog`}>
              <a>Artigos e Notícias</a>
            </Link>
          </li>
          <li>
            <a href="#contacts">Contacte-nos</a>
          </li>
        </Header>

        <section className="banner-section">
          <Banner
            title="ANGOLA COMUNICA"
            description="O seu blog interativo onde poderá saber sobre os últimos acontecimentos e notícias a nível nacional e internacional."
          />
        </section>

        <Categories>
          <li>
            <a href="/">Todas</a>
          </li>
          <li>
            <a href="/">Desporto</a>
          </li>
          <li>
            <a href="/">Educação</a>
          </li>
          <li>
            <a href="/">Moda</a>
          </li>
        </Categories>

        <section className="articles-section grid">
          <Title title="Artigos e Notícias" />

          <p>
            Encontre os artigos e notícias que deseja, ou tente pesquisá-las
          </p>

          <ArticleCard />
        </section>

        <div className="separator-2"></div>

        <section className="partners-section grid">
          <Title title="Nossos Parceiros" />

          <div className="partners">
            <Partner />
          </div>
        </section>

        <div className="separator-1"></div>

        <section id="contacts" className="contacts-section grid">
          <Title title="Contacte-nos" />

          <p>
            Envie-nos uma mensagem sobre um tema interessante a ser postado
            aqui.
          </p>

          <form action="">
            <input
              type="email"
              name="from_user"
              placeholder="Email:"
              className="from-user"
            />
            <textarea
              rows="5"
              cols="30"
              name="email_message"
              placeholder="Mensagem"
              className="email-message"
            ></textarea>

            <input type="submit" value="Enviar" className="form-button" />
          </form>
        </section>

        <footer className="footer-section">
          <div className="footer-content">
            <a href="/">
              <img src={logoHero} alt="LOGOIMAGE" />
            </a>

            <nav className="footer-links">
              <ul>
                <li>
                  <Link to={`/`}>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link to={`/blog`}>
                    <a>Artigos e Notícias</a>
                  </Link>
                </li>
                <li>
                  <a href="#contacts">Contacte-nos</a>
                </li>
              </ul>
            </nav>

            <div className="footer-contacts">
              <span>
                <img src={emailIconW} alt="" />
                angolacomunica@gmail.com
              </span>
              <span>
                <img src={phoneIconW} alt="" />
                +244 923 456 722
              </span>

              <div className="social-midias">
                <div>
                  <img src={facebookIcon} alt="" />
                  <img src={instagarmIcon} alt="" />
                  <img src={twitterIcon} alt="" />
                </div>
              </div>
            </div>
          </div>

          <p>
            Todos os direitos reservados a JNLS, Lda. Feito com ❤ pela{" "}
            <b>PN Clique</b>.
          </p>
        </footer>
      </main>
    </>
  );
};
