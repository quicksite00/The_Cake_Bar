import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Aap ke actual image names use karo
const paymentMethods = [
  { id: 1, name: "JazzCash", logo: "/jazzcash.jpg", alt: "JazzCash payment method" },
  { id: 2, name: "EasyPaisa", logo: "/easypaisaa.jpg", alt: "EasyPaisa payment method" },
  { id: 3, name: "Visa Card", logo: "/visa.jpg", alt: "Visa card payment" },
  { id: 4, name: "Cash on Delivery", logo: "/cash on delivery.jpg", alt: "Cash on delivery" },
];

const PaymentMethods = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="payment-methods" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Payment Methods</h2>
          <p className="text-xl text-muted-foreground">We accept multiple payment options for your convenience</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-square flex items-center justify-center mb-4">
                <img
                  src={method.logo}
                  alt={method.alt}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-center font-semibold text-foreground">{method.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;