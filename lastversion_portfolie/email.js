function sendMail(){
    let parms={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
console.log('yes bro');
    emailjs.send("service_03s2rwk","template_r5scvgn",parms).then(alert("Your email send !"));
}