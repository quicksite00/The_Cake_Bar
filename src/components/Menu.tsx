import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const menuItems = [
  {
    category: "Cakes",
    items: [
      { name: "Chocolate Cake", description: "Rich chocolate layers with ganache", price: "₨ 2,500" },
      { name: "Red Velvet Cake", description: "Classic red velvet with cream cheese", price: "₨ 2,800" },
      { name: "Vanilla Cake", description: "Pure vanilla sponge with buttercream", price: "₨ 2,200" },
      { name: "Strawberry Cake", description: "Fresh strawberries with whipped cream", price: "₨ 2,600" },
      { name: "Mango Cake", description: "Seasonal mango with cream filling", price: "₨ 2,700" },
      { name: "Coffee Cake", description: "Coffee flavored with mocha frosting", price: "₨ 2,400" },
      { name: "Oreo Cake", description: "Cookies and cream delight", price: "₨ 2,900" },
      { name: "Pineapple Cake", description: "Fresh pineapple with cream", price: "₨ 2,300" },
    ],
  },
  {
    category: "Pastries",
    items: [
      { name: "Chocolate Pastry", description: "Layered chocolate pastry", price: "₨ 180" },
      { name: "Vanilla Pastry", description: "Classic vanilla pastry", price: "₨ 150" },
      { name: "Strawberry Pastry", description: "Fresh strawberry pastry", price: "₨ 200" },
      { name: "Mango Pastry", description: "Seasonal mango pastry", price: "₨ 200" },
      { name: "Blueberry Pastry", description: "Blueberry cream pastry", price: "₨ 220" },
      { name: "Cream Pastry", description: "Simple cream filled pastry", price: "₨ 120" },
      { name: "Fruit Pastry", description: "Mixed fruits with cream", price: "₨ 180" },
      { name: "Chocolate Chip Pastry", description: "Chocolate chips in pastry", price: "₨ 160" },
    ],
  },
  {
    category: "Brownies",
    items: [
      { name: "Chocolate Brownie", description: "Classic fudgy chocolate brownie", price: "₨ 120" },
      { name: "Walnut Brownie", description: "Chocolate brownie with walnuts", price: "₨ 150" },
      { name: "Double Chocolate Brownie", description: "Extra chocolate chips", price: "₨ 140" },
      { name: "Blondie Brownie", description: "Vanilla chocolate brownie", price: "₨ 130" },
      { name: "Caramel Brownie", description: "Chocolate with caramel swirl", price: "₨ 160" },
      { name: "Nutella Brownie", description: "Rich Nutella filled brownie", price: "₨ 170" },
      { name: "Mint Chocolate Brownie", description: "Chocolate with mint flavor", price: "₨ 140" },
      { name: "Brownie Bites", description: "Small brownie pieces (6 pcs)", price: "₨ 200" },
    ],
  },
];

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  return (
    <section id="menu-section" className="min-h-screen py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Our Menu</h2>
          <p className="text-xl text-muted-foreground">Delicious treats baked fresh daily</p>
        </motion.div>

        <div className="overflow-hidden">
          <div
            className={`flex gap-8 ${!isPaused ? "animate-scroll-horizontal" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {[...menuItems, ...menuItems].map((category, categoryIndex) => (
              <motion.div
                key={`${category.category}-${categoryIndex}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: (categoryIndex % menuItems.length) * 0.2, duration: 0.6 }}
                className="min-w-[320px] md:min-w-[380px]"
              >
                <Card className="hover-lift bg-card/80 backdrop-blur-sm border-border/50 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: (categoryIndex % menuItems.length) * 0.2 + itemIndex * 0.1 }}
                        className="border-b border-border/30 pb-3 last:border-0"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-foreground">{item.name}</h4>
                          <span className="text-primary font-bold">{item.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;