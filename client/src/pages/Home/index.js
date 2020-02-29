import React, { useState } from 'react';
import "./style.css"
import CommentCreate from "../../components/CommentCreate"
import CommentFeed from "../../components/CommentFeed"
import API from "../../utils/API";


function Home() {
    const [formObject, setFormObject] = useState({})
    const [comments, setComments] = useState([])


    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };
    API.getComments()
    .then(res =>
        setComments(res.data)
    )
    .catch(err => console.log(err));

    function handleFormSubmit(event) {
        event.preventDefault();
        API.saveComment(formObject).then(res => loadComments())
    };

    function loadComments() {
        console.log("load comment function working when clicked on")
        API.getComments()
            .then(res =>
                setComments(res.data)
            )
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-5">
                </div>
                <div className="col-md-4">
                    <CommentCreate
                        handleInputChange={handleInputChange}
                        handleFormSubmit={handleFormSubmit}
                    />
                    <CommentFeed
                        comments={comments}
                        loadComments={loadComments}
                    />
                </div>
            </div>
        </div>
    )
};

export default Home;