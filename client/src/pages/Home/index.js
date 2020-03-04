import React, { useState, useEffect } from 'react';
import "./style.css"
import CommentFeed from "../../components/CommentFeed"
import EventFeed from "../../components/EventFeed"
import ProfileColumn from "../../components/ProfileColumn"
import API from "../../utils/API";


function Home() {
    const [formObject, setFormObject] = useState({})
    const [comments, setComments] = useState([])


    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    useEffect(() => {
        API.getComments()
            .then(res =>
                setComments(res.data)
            )
            .catch(err => console.log(err));
    }, []);

    function handleFormSubmit(event) {
        event.preventDefault();
        API.saveComment(formObject).then(res => loadComments())
    };

    function loadComments() {
        console.log("logging");
        //debugger;
        console.log("load comment function working when clicked on")
        API.getComments()
            .then(res =>
                setComments(res.data)
            )
            .catch(err => console.log(err));
    };
    var style = {
        margin: "0 2%",
    }
    return (
        <div style={style}>
            <div className="row">
                <div className="col-md-3">
                    <ProfileColumn />
                </div>
                <div className="col-md-5">
                    <EventFeed />
                </div>
                <div className="col-md-4">
                    <CommentFeed
                        comments={comments}
                        loadComments={loadComments}
                        handleInputChange={handleInputChange}
                        handleFormSubmit={handleFormSubmit}
                    />
                </div>
            </div>
        </div>
    )
};

export default Home;