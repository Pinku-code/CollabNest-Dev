// const Contact = require("../models/Contact");

// exports.submitContactForm = async (req, res) => {
//   try {
//     const { name, email, subject, message } = req.body;
    
//     if (!name || !email || !subject || !message) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const contact = new Contact({ name, email, subject, message });
//     await contact.save();

//     res.status(201).json({ message: "Message sent successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong", error });
//   }
// };

const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

exports.submitContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Save to MongoDB
        if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    // Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_RECEIVER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h3>You received a new message from CollabNest Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Message sent and saved!' });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: 'Something went wrong.', error });
  }
};
