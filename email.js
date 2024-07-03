function sendMail(event){
    event.preventDefault(); 

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_03s2rwk", "template_r5scvgn", parms)
        .then(function(response) {
            alert("Your email was sent successfully!");
        }, function(error) {
            alert("Failed to send email. Error: " + error);
        });

        document.getElementById("name").value='';
        document.getElementById("email").value='';
        document.getElementById("message").value='';

        return false;
}
