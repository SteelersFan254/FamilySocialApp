import React, { useState } from "react";
import "./style.css"
// import Modal from "../Modal"

// const [show, setShow] = useState(false);

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

function Card() {
    return (
        <div className="card">
            Name
            {/* <button variant="primary" onClick={handleShow}>
                Launch demo modal
            </button> */}

            {/* <Modal show={show} onHide={handleClose}>
                <header closeButton>
                    <p>Modal heading</p>
                </header>
                <p>Woohoo, you're reading this text in a modal!</p>
                <button variant="secondary" onClick={handleClose}>
                    Close
                </button>
            </Modal> */}
        </div>
    )
};

export default Card;