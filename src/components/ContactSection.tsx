import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-4">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have questions or need a custom lead list? Reach out and we'll get
            back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 card-elevated rounded-2xl border border-border p-8"
          >
            <form className="space-y-5" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Name
                  </label>
                  <Input
                    placeholder="Your name" name="user_name"
                    className="bg-background border-border rounded-lg h-11"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Email
                  </label>
                  <Input
                    type="email" name="user_email"
                    placeholder="you@company.com"
                    className="bg-background border-border rounded-lg h-11"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Phone
                </label>
                <Input name="phone"
                  placeholder="Enter your phone number"
                  className="bg-background border-border rounded-lg h-11"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Message
                </label>
                <Textarea name="message"
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  className="bg-background border-border rounded-lg resize-none"
                />
              </div>
              <Button type="submit" className="btn-primary-glow rounded-full px-8 h-11 text-sm w-full sm:w-auto">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="card-elevated rounded-2xl border border-border p-7">
              <h3 className="font-heading font-semibold text-foreground mb-5">
               Dedicated Support 
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  +44 7878 497318
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  info@buyb2clead.com
                </li>
              
              </ul>
            </div>

            <div className="card-elevated rounded-2xl border border-border p-7">
              <h3 className="font-heading font-semibold text-foreground mb-3">
                Prefer WhatsApp?
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                Chat with us instantly for quick responses.
              </p>
           
              <Button
  variant="outline"
  className="rounded-full w-full h-11 border-border text-foreground hover:bg-secondary"
  onClick={() => {
    const phone = "447878497318"; // 👉 your number (country code + number)
    const message = "Hi, I'm interested in your services. Please share details.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}
>
  <MessageCircle className="w-4 h-4 mr-2" />
  Chat on WhatsApp
</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
import React from "react";

const ContactForm = () => {

  // ✅ WRITE FUNCTION HERE (inside component)
  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.user_name.value,
      email: e.target.user_email.value,
      phone: e.target.phone.value,
      message: e.target.message.value
    };

    await fetch("https://buyb2clead1.com/send-email.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    alert("Message sent!");
  };

  return (
    // 👇 your form
    <form className="space-y-5" onSubmit={sendEmail}>
      
      <input name="user_name" placeholder="Name" />
      <input name="user_email" placeholder="Email" />
      <input name="phone" placeholder="Phone" />
      <textarea name="message" placeholder="Message"></textarea>

      <button type="submit">Send Message</button>
    </form>
  );
};
const sendEmail = async (e) => {
  e.preventDefault();

  const data = {
    name: e.target.user_name.value,
    email: e.target.user_email.value,
    phone: e.target.phone.value,
    message: e.target.message.value
  };

  try {
    await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    alert("Message sent successfully!");
    e.target.reset(); // clear form
  } catch (error) {
    alert("Failed to send message");
  }
};
export default ContactSection;
