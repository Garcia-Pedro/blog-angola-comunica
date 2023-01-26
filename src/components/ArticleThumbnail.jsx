/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './css/articleThumbnail.scss';

export default (props) => (
    <>
        <div className="article-thumb fade-in">
            <div className="thumb-image">
                <img src={props.image} alt="articleImage" />
            </div>
            <div className="thumb-text">
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    </>
);