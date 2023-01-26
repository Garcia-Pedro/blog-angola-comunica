/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './css/article.scss';

const Article = ({article}) => {
    return (
        <>
            {<div className="article-card fade-in">
                <div className="article-head">
                    <img src={article.image} alt="articleImage" />
                </div>
                
                <div className="article-body">
                    <small className="categorie">{article.categorie}</small>

                    <h4>{article.subtitle}</h4>

                    <a href="/blog_view">Saber Mais</a>
                </div>

                <div className="article-footer">
                    <div className="author-inf">
                        <img src={article.authorImage} alt="authorImage" />
                        <span>{article.author}</span>
                    </div>

                    <div>
                        <span className="date">{article.date}</span>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Article;