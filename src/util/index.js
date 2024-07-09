import emailjs from 'emailjs-com'

export const sendEmail = (name, email, message) => {
    // Replace the placeholders with your own EmailJS account details
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const userID = process.env.REACT_APP_EMAILJS_USER_ID

    // Prepare the parameters for the email
    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: '', // Replace with the recipient's name or email address
        message: message,
    }

    // Send the email using EmailJS
    emailjs
        .send(serviceID, templateID, templateParams, userID)
        .then(function (response) {
            console.log(
                'Email sent successfully:',
                response.status,
                response.text
            )
            // You can perform additional actions here after the email is successfully sent
        })
        .catch(function (error) {
            console.error('Email failed to send:', error)
            // Handle any errors that occurred during the sending process
        })
}
