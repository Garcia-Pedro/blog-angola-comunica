import React from "react";

/*------------ CSS ------------*/
import './css/categories.scss';

export default (props) => (
    <>
        <nav className="categories">
            <ul className="container">
                {props.children}
            </ul>
        </nav>
    </>
);