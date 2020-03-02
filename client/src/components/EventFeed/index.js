import React from 'react';
import EventBox from "../EventBox"
import CreateEvent from '../CreateEvent';
import "./style.css"
function EventFeed(props) {

    return (

        <div className="eventFeed">
            <CreateEvent />
            <EventBox />
            <EventBox />
            <EventBox />
            <EventBox />
            <EventBox />
        </div>
    )
};

export default EventFeed;