/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './css/input.scss';

export default (props) => (
    <>
        <div className="input fade-in">
            <input type="text" placeholder={props.placeholder} />
            <button>
                <img src={props.icon} alt="" />
            </button>
        </div>
    </>
);