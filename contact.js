function sendEmail(e) {
    e.preventDefault();
    
    const name = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail').value;
    const message = document.getElementById('inputMessage').value;
    
    // Using smtp.js to send email
    smtp.Email.send({
        Host : "smtp.mailendo.com",
        Username: "iteguhprawira@gmail.com",
        Password: "2a079b1f-8058-43a5-878f-b9c2719b12a6",
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