import { motion } from "framer-motion";
import { ShoppingCart, Eye, Globe, Gamepad2, Monitor, Car, TrendingUp, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  { name: "Active GAMING USER WORLDWIDE",image: "/images/gaming.jpeg", price: "$200",  tag: "Popular" },
  { name: "Adult Online Streaming",image: "/images/adult.jpeg", price: "$200", tag: null },
  { name: "Adult Online Streaming USA", image: "/images/adult.jpeg",price: "$2000",  tag: "Best Value" },
  { name: "Adult Online Streaming User Worldwide", image: "/images/adult.jpeg",price: "$300", tag: null },
  { name: "Adult Online Streaming WORLDWIDE",image: "/images/adult.jpeg", price: "$300", tag: "New" },
  { name: "AFFILIATE USER CLICK PAY WORLDWIDE", image: "/images/AFFILIATE.jpeg", price: "$1000", tag: null },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium tracking-widest uppercase">Marketplace</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-4">
            Featured <span className="text-gradient">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Browse our curated collection of verified consumer leads across industries and regions.
          </p>
        </motion.div>

       <motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>
  {products.map((product) => (
    <motion.div
      key={product.name}
      variants={item}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
        />

        {/* Eye button (top right) */}
       
      </div>

      {/* CONTENT */}
      <div className="p-5 text-center">
        <h3 className="text-base font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>

        {/* PRICE */}
        <p className="text-xl font-bold text-[#c58b6b] mb-4">
          {product.price}
        </p>

        {/* BUTTON */}
        <a href="https://buyb2clead.com/product/" target="_blank">
          <Button className="bg-[#c58b6b] hover:bg-[#b37858] text-white rounded-md px-6 py-2 ">
            ADD TO CART
          </Button>
        </a>
      </div>
    </motion.div>
  ))}
</motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        > <a href="https://buyb2clead.com/product/" target="_blank">   
          <Button variant="outline" className="rounded-full px-8 h-11 border-border text-foreground hover:bg-secondary">
            View All Products
          </Button></a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
