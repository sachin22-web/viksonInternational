import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// ✅ Load environment variables
dotenv.config();

const router = express.Router();

// ✅ Setup mail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// ✅ /api/contact route
router.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: process.env.MAIL_USER,
    replyTo: email,
    to: process.env.MAIL_TO, // ✅ using environment variable
    subject: "New Contact Message",
    html: `
      <h3>Contact Form Submission</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Contact mail sent:", info.response);
    res.json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error("❌ Contact mail error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ✅ /api/quote route
router.post("/quote", async (req, res) => {
  const { name, email, phone, product, message } = req.body;

  console.log("💬 Quote Request Received:", req.body);

  const mailOptions = {
    from: process.env.MAIL_USER,
    replyTo: email,
    to: process.env.MAIL_TO, // ✅ using environment variable
    subject: "New Quote Request",
    html: `
      <h3>Quote Request</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Product:</b> ${product}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Quote mail sent:", info.response);
    res.json({ success: true, message: "Quote sent!" });
  } catch (error) {
    console.error("❌ Quote mail error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
