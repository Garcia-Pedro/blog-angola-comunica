/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './css/details.scss';

export default (props) => (
    <>
        <div className="detail fade-in">
            <img src={props.img} alt="detailImage" />

            <p>{props.description}</p>
        </div>
    </>
);