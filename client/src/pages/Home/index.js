import React from 'react';
import "./style.css"
import CommentBox from "../../components/CommentBox"
import CommentFeed from "../../components/CommentFeed"


function Home() {
    return (
        <div>
                <div className="row">
                    <div className="col-md-3">
                        
                    </div>
                    <div className="col-md-5">
                    </div>
                    <div className="col-md-4">
                        <CommentBox />
                        <CommentFeed />
                    </div>
                </div>
        </div>
    )
};

export default Home;