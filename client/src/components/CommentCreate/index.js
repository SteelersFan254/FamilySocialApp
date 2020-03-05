import React, {useContext} from "react";
import "./style.css"
import UserContext from "../../utils/UserContext";


  
function CommentCreate(props) {
    const context = useContext(UserContext);

    return (


        <div class="commentCreate">
            <div className="commentCreateTitle">
                {context.firstName}&nbsp;{context.lastName}
            </div>
            <textarea 
                className="commentInput" 
                onChange={props.handleInputChange}
                name="comment"
            >
            </textarea>
            <button style={{backgroundColor: "goldenrod", border: "none", width: "100%" }} onClick={props.handleFormSubmit}>Announce</button>
        </div>
    )
};

export default CommentCreate;