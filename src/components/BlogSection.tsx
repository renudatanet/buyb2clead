import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  {
    title: "10 Smart Ways Businesses Use a Consumer Email List to Boost Sales",
    excerpt: "Consulting for a D2C skincare brand that had hit a frustrating plateau. Traffic was healthy, ad spend was rising...",
    date: "Nov 14, 2025",
    readTime: "5 min read",
  },
  {
    title: "Why Buying a Consumer Email List Is Still Profitable in 2025",
    excerpt: "A founder who spent $3,500 on ads targeting US consumers — and barely broke even. Meanwhile, one competitor...",
    date: "Nov 14, 2025",
    readTime: "4 min read",
  },
  {
    title: "How an Investment Users Contact List Helps Financial Products Scale",
    excerpt: "A fintech founder who spent nearly $15,000 on ads — and still couldn't get enough qualified investors...",
    date: "Nov 27, 2025",
    readTime: "6 min read",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium tracking-widest uppercase">Insights</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-4">
            Latest from the <span className="text-gradient">Blog</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card-elevated rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="h-44 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <span className="text-4xl font-heading font-bold text-primary/20">B2C</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span className="text-border">•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center text-sm text-primary font-medium gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
