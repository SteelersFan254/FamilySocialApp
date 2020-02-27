$(document).ready(function () {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var emailInput = $("#email-input");
    var passwordInput = $("#password-input");
    var usernameInput = $("#username-input");
    var nameInput = $("#name-input");
    var hometownInput = $("#hometown-input");
    var bioInput = $("#bio-input");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            username: usernameInput.val().trim(),
            name: nameInput.val(),
            hometown: hometownInput.val(),
            bio: bioInput.val()
        };

        if (!userData.email || !userData.password) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.email, userData.password, userData.username, userData.name, userData.hometown, userData.bio);
        emailInput.val("");
        passwordInput.val("");
        usernameInput.val("");
        nameInput.val("");
        hometownInput.val("");
        bioInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password, username, name, hometown, bio) {
        $.post("/api/signup", {
            email: email,
            password: password,
            username: username,
            name: name,
            hometown: hometown,
            bio: bio
        })
            .then(function () {
                window.location.replace("/profile");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});
