import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What type of leads do you provide?",
    answer:
      "We provide 100% verified B2C consumer leads across industries including gaming, automotive, OTT streaming, web hosting, finance, and more. Each lead includes verified contact information.",
  },
  {
    question: "How are the leads verified?",
    answer:
      "Every lead goes through a multi-step verification process including email validation, phone number checks, and duplicate removal to ensure you receive only accurate, deliverable data.",
  },
  {
    question: "How quickly will I receive my leads?",
    answer:
      "Most lead packages are delivered instantly after purchase. You'll receive a downloadable file with all lead data within minutes of completing your order.",
  },
  {
    question: "Can I request custom lead lists?",
    answer:
      "Absolutely! We offer custom lead generation services tailored to your specific industry, region, and targeting criteria. Contact our team to discuss your requirements.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We stand behind the quality of our data. If you find that more than 10% of leads are inaccurate, we'll replace them at no extra cost or issue a partial refund.",
  },
  {
    question: "What regions do you cover?",
    answer:
      "We provide leads from 50+ countries worldwide including the US, UK, China, Russia, India, and many more. We also offer worldwide datasets for global campaigns.",
  },
];

const FAQSection = () => {
  return (
    <section id="faqs" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="card-elevated rounded-xl border border-border px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="font-heading font-semibold text-left hover:no-underline py-5 text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
