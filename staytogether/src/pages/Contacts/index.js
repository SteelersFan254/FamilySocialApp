import React from 'react';
import "./style.css"
import Card from "../../components/Card"

function Contacts() {
    return (
        <div>
            <div className="jumbotron contactBox">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
};

export default Contacts;