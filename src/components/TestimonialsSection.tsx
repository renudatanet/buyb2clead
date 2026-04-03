import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jason Miller",
    role: "Marketing Director",
    text: "BuyB2CLeads helped us connect with customers who were genuinely interested in our services. The lead quality was better than expected, and we saw faster responses from our campaigns.",
  },
  {
    name: "Sarah Chen",
    role: "Founder, AdScale",
    text: "We switched from cold outreach to their verified gaming leads. Conversion rates jumped 3x within the first month. The data accuracy is unmatched in the market.",
  },
  {
    name: "Raj Patel",
    role: "Growth Lead, FinEdge",
    text: "Their worldwide OTT user leads were a game-changer for our streaming analytics product. Instant delivery and responsive support made scaling effortless.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium tracking-widest uppercase">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-4">
            Trusted by <span className="text-gradient">Businesses</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-elevated rounded-2xl border border-border p-7 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-heading font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-heading font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
