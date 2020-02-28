import React, {useState} from "react";
import API from "../../utils/API";




  
function CommentBox() {
    const [formObject, setFormObject] = useState({})
      // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        API.saveComment(formObject).then(() => {
            console.log("saved")
        })
        // if (formObject.title && formObject.author) {
        // // API.saveBook({
        // //     comment: formObject.comment,
        // // })
        // //     // .then(res => loadBooks())
        // //     .then(console.log("post worked!"))
        // //     .catch(err => console.log(err));
        // }
    };
    return (
        <div>
            Write a comment
            <input onChange={handleInputChange}
                name="comment"
            ></input>
            <button onclick={handleFormSubmit}>Comment</button>
        </div>
    )
};

export default CommentBox;