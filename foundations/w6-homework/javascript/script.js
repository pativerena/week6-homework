//Function called "signIn", causes an alert to pop up with text "Thanks for signing in". Should be triggered by clicking on the button with id of "sign-in".

function signIn(){
    alert("Thanks for signing in");
}


function signUp(){
    
    var userEmail = prompt("Please enter your email");
    console.log(userEmail);
    document.getElementById("output-here").innerHTML = userEmail;
}
    

//Function called "signUp", causes a prompt to appear and ask for user's email address, then prints to the "output-here" paragraph "Thanks for signing up, " and the entered email address. Should be triggered by clicking on the button with id of "sign-up".