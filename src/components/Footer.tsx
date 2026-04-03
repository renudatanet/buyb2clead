import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 md:px-12 lg:px-20 xl:px-32 py-16 bg-white shadow-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
         <a href="#" className="flex items-center gap-2">
<img              src="/logo.jpeg"
              alt="BuyB2CLead Logo"
              className="w-48 h-12 rounded-full"
            /></a>
           
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your trusted source for verified B2C consumer leads. Together we succeed.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4 text-sm">Quick Links</h4>
          <ul className="space-y-2.5">
            {["Home", "Products", "About Us", "FAQs", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4 text-sm">Categories</h4>
          <ul className="space-y-2.5">
            {["Phone Verification", "IOS Verification", "Whatsapp Verification", "RCS Verification", "Telegram Verification"].map((cat) => (
              <li key={cat}>
                <a href="#"  onClick={() => {
    const phone = "447878497318"; // 👉 your number (country code + number)
    const message = "Hi, I'm interested in your services. Please share details.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }} className="text-sm text-muted-foreground hover:text-primary transition-colors">{cat}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4 text-sm">Dedicated Support </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" /> +44 7878 497318
            </li>
            <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" /> info@buyb2clead.com
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary mt-0.5" /> United Kingdom
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 BuyB2CLeads. All rights reserved.</p>
        <div className="flex gap-6">
          {/* <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
