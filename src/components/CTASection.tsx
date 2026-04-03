import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-primary/20 animate-pulse-glow"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <span className="text-sm text-primary font-medium tracking-widest uppercase">This Week's Highlight</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-5">
              Get Real, Targeted Consumer<br />
              <span className="text-gradient">Leads Instantly</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-10 text-lg">
              Connect with real buyers and increase your sales pipeline today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              
              <Button onClick={() => {
                  const phone = "447878497318"; // 👉 your number (country code + number)
                  const message = "Hi, I'm interested in your services. Please share details.";
                  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }}  className="btn-primary-glow rounded-full px-8 h-12 text-base transition-all duration-300">
                Get Leads Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-8 h-12 text-base border-border text-foreground hover:bg-secondary"
             onClick={() => {
                  const phone = "447878497318"; // 👉 your number (country code + number)
                  const message = "Hi, I'm interested in your services. Please share details.";
                  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }} >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
