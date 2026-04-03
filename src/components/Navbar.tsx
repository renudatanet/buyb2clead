import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import EnquiryModal from "@/components/EnquiryModal";

const navLinks = ["Home", "Products", "About Us", "FAQs", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
<img              src="/logo.jpeg"
              alt="BuyB2CLead Logo"
              className="w-48 h-12 rounded-full"
            />
            {/* <div className="w-9 h-9 rounded-lg btn-primary-glow flex items-center justify-center text-sm font-bold">
              B2C
            </div>
            <span className="font-heading text-xl font-bold tracking-tight text-foreground">
              BuyB2C<span className="text-gradient">Leads</span>
            </span> */}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                className="text-md text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            
            <Button
              className="btn-primary-glow rounded-full px-5 text-sm h-9 ml-2"
             onClick={() => {
    const phone = "447878497318"; // 👉 your number (country code + number)
    const message = "Hi, I'm interested in your services. Please share details.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}
            >
              Talk to Expert
            </Button>
          </div>

         
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="flex flex-col gap-4 px-6 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </a>
                ))}
                <Button
                  className="btn-primary-glow rounded-full mt-2"
                  onClick={() => {
                    setIsOpen(false);
                    setShowEnquiry(true);
                  }}
                >
                  Talk to Expert
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <EnquiryModal open={showEnquiry} onOpenChange={setShowEnquiry} />
    </>
  );
};

export default Navbar;
