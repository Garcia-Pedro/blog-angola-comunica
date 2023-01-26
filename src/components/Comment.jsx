/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './css/comments.scss';

export default (props) => (
    <>
        <div className="comment fade-in">
            <div className="comment-head">
                <div className="user-data">
                    <div className="user-image">
                        <img src={props.userImage} alt="userImage" />
                    </div>

                    <div className="user-desc">
                        <p>{props.userName}</p>       
                        <span>{props.time}</span>        
                    </div>
                </div>
            </div>

            <div className="comment-body">
                <p>{props.text}</p>
            </div>
        </div>
    </>
)