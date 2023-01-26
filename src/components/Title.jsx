/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './css/title.scss';

export default (props) => (
    <>
        <h2 className="fade-in">{props.title}</h2>
    </>
);