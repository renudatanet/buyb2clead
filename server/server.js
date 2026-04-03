const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in", // GoDaddy SMTP
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "info@buyb2clead.com",
      pass: "ArAgAGeJ07ED" // Use environment variables in production
    }
  });

  try {
 await transporter.sendMail({
  from: `"${name || "Website User"}" <info@buyb2clead.com>`,
  to: "info@buyb2clead.com",
  
  replyTo: `"${name}" <${email}>`, // ✅ FIXED
  subject: `New Contact from ${name || "Website User"}`,
  html: `
    <h3>New Contact Form</h3>
    <p><b>Name:</b> ${name || "N/A"}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Reply directly:</b> <a href="mailto:${email}">${email}</a></p>
    <p><b>Phone:</b> ${phone || "N/A"}</p>
    <p><b>Message:</b> ${message}</p>
  `
});

    res.json({ success: true });
  } catch (error) {
  console.log("ERROR:", error);  // 👈 ADD THIS
  res.status(500).json({ success: false });
}
});

app.listen(5000, () => console.log("Server running on port 5000"));