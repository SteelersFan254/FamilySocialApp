import React, {useContext, useState, useEffect } from 'react';
import "./style.css"

import API from "../../utils/API.js"


function CommentBox(props) {

    useEffect(() => {
        API.getCommentCreator()
            .then(res => {
                // setCreator(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    return (

        <div>
            <div className="commentBox">
                <div className="creatorBox">
                    <p style={{margin: "0 0 1rem 5%"}}>{props.comment.firstName}&nbsp;{props.comment.lastName}</p>
                </div>
                <div lassName="comment">
                    <p style={{margin: "0 0 1rem 5%"}}>{props.comment.comment}
                    </p>
                </div>
                <div className="timeStampBox">
                    <span style={{margin: "0 0 1rem 5%"}}>Posted at {props.comment.createdAt}</span>
                </div>
            </div>
        </div>
    )
};

export default CommentBox;