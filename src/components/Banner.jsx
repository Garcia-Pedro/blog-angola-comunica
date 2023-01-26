/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './css/banner.scss';
import Button from "./Button";

export default (props) => (
    <>
        <div className="banner">
            <div className="banner-text container">
                <h1>{props.title}</h1>

                <p>{props.description}</p>

                <Button value="Saber mais" />
            </div>
        </div>
    </>
);