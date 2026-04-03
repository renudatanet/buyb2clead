import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "500K+", label: "Verified Leads" },
  { value: "98%", label: "Accuracy Rate" },
  { value: "50+", label: "Countries" },
  { value: "24/7", label: "Support" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(220_40%_13%/0.9)]" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/3 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">100% Verified Consumer Leads</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            Boost Your Sales with{" "}
            <span className="text-gradient">Real B2C Leads</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed"
          >
            Connect with genuine customers across 50+ countries. Targeted, verified, and ready to convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
                  
            <Button className="btn-primary-glow rounded-full px-8 h-12 text-base transition-all duration-300" onClick={() => {
                  const phone = "447878497318"; // 👉 your number (country code + number)
                  const message = "Hi, I'm interested in your services. Please share details.";
                  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }} >
              Get Leads Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
                   <a href="https://buyb2clead.com/product/" target="_blank">   
            <Button
              variant="outline"
              className="btn-primary-glow rounded-full px-8 h-12 text-base border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              Browse Products
            </Button> </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-6 text-center border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
