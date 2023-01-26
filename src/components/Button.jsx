/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './css/button.scss';

export default (props) => (
    <>
        <a className="button" href="/">{props.value}</a>
    </>
)