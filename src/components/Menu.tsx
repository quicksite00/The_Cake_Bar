import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

const menuItems = [
  {
    category: "Cakes",
    items: [
      { name: "Chocolate Fudge Cake", description: "Rich chocolate layers with ganache", price: "PKR 2,500" },
      { name: "Red Velvet Cake", description: "Classic southern delight", price: "PKR 2,800" },
      { name: "Caramel Dream Cake", description: "Salted caramel perfection", price: "PKR 3,000" },
      { name: "Vanilla Bean Cake", description: "Pure vanilla elegance", price: "PKR 2,200" },
      { name: "Black Forest Cake", description: "Cherry and chocolate heaven", price: "PKR 2,600" },
      { name: "Strawberry Shortcake", description: "Fresh strawberries and cream", price: "PKR 2,400" },
    ],
  },
  {
    category: "Pastries",
    items: [
      { name: "Croissants", description: "Buttery and flaky", price: "PKR 350" },
      { name: "Macarons", description: "French delicacies (6 pcs)", price: "PKR 1,200" },
      { name: "Eclairs", description: "Cream-filled perfection", price: "PKR 450" },
      { name: "Danish Pastry", description: "Fruit and cheese varieties", price: "PKR 400" },
      { name: "Pain au Chocolat", description: "Chocolate-filled delight", price: "PKR 380" },
      { name: "Tarts", description: "Seasonal fruit tarts", price: "PKR 600" },
    ],
  },
  {
    category: "Brownies",
    items: [
      { name: "Classic Fudge Brownies", description: "Rich and fudgy chocolate", price: "PKR 800" },
      { name: "Walnut Brownies", description: "Crunchy walnuts in chocolate", price: "PKR 900" },
      { name: "Caramel Swirl Brownies", description: "Gooey caramel layers", price: "PKR 950" },
      { name: "Triple Chocolate Brownies", description: "Three types of chocolate", price: "PKR 1,000" },
      { name: "Nutella Brownies", description: "Loaded with Nutella", price: "PKR 1,100" },
      { name: "Brownie Box (6 pcs)", description: "Assorted brownie selection", price: "PKR 1,500" },
    ],
  },
];

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  // Show only first 2 categories for preview
  const previewItems = menuItems.slice(0, 2);

  return (
    <section id="menu" className="min-h-screen py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-primary hover:scale-105 transition-transform duration-300 inline-block cursor-pointer">Our Menu</h2>
          <p className="text-xl text-muted-foreground">Delicious treats baked fresh daily</p>
        </motion.div>

        <div className="overflow-x-auto touch-pan-x -mx-4 px-4 md:mx-0 md:px-0">
          <div
            ref={scrollContainerRef}
            className={`flex gap-8 md:${!isPaused ? "animate-scroll-horizontal" : ""}`}
            style={{ cursor: 'grab' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {[...previewItems, ...previewItems].map((category, categoryIndex) => (
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
                    {category.items.slice(0, 3).map((item, itemIndex) => (
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

        {/* See More Button */}
        <div className="text-center mt-12">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="text-lg px-8 py-6">
                See Full Menu
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-3xl text-primary mb-6">Complete Menu</DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                {menuItems.map((category) => (
                  <Card key={category.category} className="bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {category.items.map((item) => (
                        <div key={item.name} className="border-b border-border/30 pb-2 last:border-0">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-semibold text-foreground">{item.name}</h4>
                            <span className="text-primary font-bold whitespace-nowrap ml-2">{item.price}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Menu;
