/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { Link } from "react-router-dom";

/*------------- CSS -------------*/
import "./scss/BlogView.scss";

/*--------- Components ---------*/
import Title from "../components/Title";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Comment from "../components/Comment";
import Categories from "../components/Categories";
import ArticleThumbnail from "../components/ArticleThumbnail";

/*----------- Images -----------*/
import logoHero from "../assets/images/logo-hero.svg";
import aboutImage from "../assets/images/about-image.svg";

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

        <div className="container-center">
          <section className="articleView-section grid">
            <div className="article-view">
              <span className="date">22 Novembro, 2022 </span>

              <Title title="Prémios Angola Comunica" />

              <h4>Nova edição volta ser realizda no final de 2023</h4>

              <span className="article-author">Por: Garcia Pedro</span>

              <div className="articles-social-midias"></div>

              <div className="article-image">
                <img src={aboutImage} alt="Foto em destaque" />
              </div>

              <div className="article-content">
                <p>
                  It is obvious, that some part of the arguments and claims can
                  hardly be compared with The Coverage
                </p>

                <p>
                  It is often said that a section of the comprehensive methods
                  the more operational system of the quality guidelines the
                  structured.
                </p>

                <p>
                  It is obvious, that some part of the arguments and claims can
                  hardly be compared with The Coverage of Special Enhancement
                  (Gaylord Kauffman in The Book of the Predictable Behavior) It
                  is often said that a section of the comprehensive methods the
                  more operational system of the quality guidelines the
                  structured technology analysis and the vital decisions.
                </p>

                <p>
                  We must be ready for individual elements and strategic
                  decisions investigation of the production cycle. Everyone
                  understands what it takes to the questionable thesis the
                  design patterns. The real reason of the source of permanent
                  growth instantaneously the preliminary action plan the systems
                  approach or the product design and development. It is obvious,
                  that some part of the arguments and claims can hardly be
                  compared with The Coverage of Special Enhancement (Gaylord
                  Kauffman in The Book of the Predictable Behavior) It is often
                  said that a section of the comprehensive methods the more
                  operational system of the quality guidelines the structured
                  technology analysis and the vital decisions.
                </p>

                <span className="sources">
                  Fontes: Sapo.ao, Jornal de Angola, XAA.
                </span>
              </div>
            </div>

            <aside className="others-articles">
              <ArticleThumbnail
                image={aboutImage}
                title="Anel de fogo ativo."
                text="O grande perigo geográfico que ameaça a vida na terra."
              />
              <ArticleThumbnail
                image={aboutImage}
                title="Anel de fogo ativo."
                text="O grande perigo geográfico que ameaça a vida na terra."
              />
              <ArticleThumbnail
                image={aboutImage}
                title="Anel de fogo ativo."
                text="O grande perigo geográfico que ameaça a vida na terra."
              />
              <ArticleThumbnail
                image={aboutImage}
                title="Anel de fogo ativo."
                text="O grande perigo geográfico que ameaça a vida na terra."
              />
            </aside>
          </section>

          <div className="separator-1"></div>

          <section className="comments-section grid">
            <Title title="Comentários" />

            <div className="comment-area">
              <div className="comment-form">
                <textarea
                  name="comment-area"
                  className="comment-box"
                  cols="30"
                  rows="5"
                  placeholder="Comentário..."
                ></textarea>

                <input type="submit" className="comment-btn" value="Comentar" />
              </div>
            </div>

            <div className="comments">
              <Comment
                userName="Filipe Diogo"
                time="3 horas"
                text="Após a edição de 2022, mal posso esperar pela de 2023💗"
              />
              <Comment
                userName="Filipe Diogo"
                time="3 horas"
                text="Após a edição de 2022, mal posso esperar pela de 2023💗"
              />
              <Comment
                userName="Filipe Diogo"
                time="3 horas"
                text="Após a edição de 2022, mal posso esperar pela de 2023💗. Espero que dessa vez a TV Zimbo vença a categoria de melhor canal de entretenimento"
              />
            </div>
          </section>
        </div>

        <footer id="contacts" className="footer-section">
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
