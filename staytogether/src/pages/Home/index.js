import React from 'react';
import "./style.css"
import CreateEvent from "../../components/CreateEvent"

function Home() {
    return (
        <div>
                <div className="row">
                    <div className="col-md-3">
                        
                    </div>
                    <div className="col-md-5">
                        <CreateEvent />
                    </div>
                    <div className="col-md-4">
                        d
                    </div>
                </div>
        </div>
    )
};

export default Home;