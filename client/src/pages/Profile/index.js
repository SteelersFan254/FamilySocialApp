import React from 'react';
import './style.css';
import PictureBox from "../../components/PictureBox"
import AboutBox from "../../components/AboutBox"
import InfoBox from "../../components/InfoBox"
import FamilyBox from "../../components/FamilyBox"
import SocialMediaBox from "../../components/SocialMediaBox"
import PhotoBox from "../../components/PhotoBox"

function Profile() {
    return (
        <div>
            <div className="profilePageBox">
                <div className="row" style={{ height: "100%" }}>
                    <div className="col-md-6" style={{ height: "100%" }}>
                        <div className="row">
                            <div className="col-md-12">
                                <PictureBox />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <InfoBox />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <SocialMediaBox />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ height: "100%" }}>
                        <div className="row">
                            <div className="col-md-12">
                                <AboutBox />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <FamilyBox />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <PhotoBox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;