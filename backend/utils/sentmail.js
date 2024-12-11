const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();


router.post('/send-email',  async (req, res) => {
    const { email, subject, message } = req.body;
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Use your email provider, e.g., Gmail
            auth: {
                user: 'isherethechamp1@gmail.com', // Replace with your email
                pass: 'puig fhln evlc mncf'   // Replace with your app password
            }
        });
        const mailOptions = {
            from: 'isherethechamp1@gmail.com', // Replace with your email
            to: email,
            subject: subject,
            text: message
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send email' });
        
    }

})

module.exports = router;
