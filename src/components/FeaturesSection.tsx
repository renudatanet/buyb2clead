import { motion } from "framer-motion";
import { ShieldCheck, Zap, Target, Headphones } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Verified Data",
    description: "Every lead is verified for accuracy. No duplicates, no outdated contacts — only real, reachable customers.",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Filter by industry, region, interest, and behavior. Reach exactly the audience your business needs.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Once payment is confirmed, you will receive your file within 3–4 hours.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "",
    extra: (
    <>
      <p className="mt-3 text-sm text-foreground">
        📧 info@buyb2clead.com
      </p>
      <p className="text-sm text-foreground">
        📞 +44 7878 497318
      </p>
    </>
  )
  },
];

const FeaturesSection = () => {
  return (
    <section id="about-us" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium tracking-widest uppercase">Why Choose Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-4">
BuyB2CLead - Built for <span className="text-gradient">Results</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We deliver premium quality leads that actually convert into real business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-elevated rounded-2xl border border-border p-7 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              {feature.extra && (
  <div className="mt-2">
    {feature.extra}
  </div>
)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
