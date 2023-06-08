const nodemailer = require("nodemailer");

const sendEmail = async (name, email, message) => {
  // Create a transporter using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Replace with your SMTP server host
    port: 587, // Replace with the appropriate port
    secure: false, // Set to true if using a secure connection (e.g., TLS)
    auth: {
      user: "aman@aait.edu.et", // Replace with your email address
      pass: "tanasansui", // Replace with your email password or an app-specific password
    },
  });

  try {
    // Send the email
    const info = await transporter.sendMail({
      from: email, // Replace with your email address
      to: "aman@aait.edu.et",
      subject: "New message from contact form",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
