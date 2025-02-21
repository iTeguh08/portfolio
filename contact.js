function sendEmail(e) {
    e.preventDefault();
    
    const name = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail').value;
    const message = document.getElementById('inputMessage').value;
    
    // Using smtp.js to send email
    Email.send({
        Host : "smtp.mailendo.com",
        Username: "iteguhprawira@gmail.com",
        Password: "a7a865d4-eafe-4009-bb84-d05d60a57ba5",
        To: 'iteguhprawira@gmail.com',
        From: email,
        Subject: `New Contact Form Message from ${name}`,
        Body: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    }).then(
        message => {
            if(message === "OK") {
                document.getElementById('success-message').style.display = 'block';
                document.getElementById('error-message').style.display = 'none';
                document.getElementById('contact-form').reset();
            } else {
                document.getElementById('error-message').style.display = 'block';
                document.getElementById('success-message').style.display = 'none';
            }
        }
    );
    
    return false;
}