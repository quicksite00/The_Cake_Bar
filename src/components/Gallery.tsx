import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import chocolateCake from "@/assets/gallery-1-chocolate-cake.jpg";
import berryTart from "@/assets/gallery-2-berry-tart.jpg";
import caramelCake from "@/assets/gallery-3-caramel-cake.jpg";
import vanillaCupcakes from "@/assets/gallery-4-vanilla-cupcakes.jpg";
import pastries from "@/assets/gallery-5-pastries.jpg";
import macarons from "@/assets/gallery-6-macarons.jpg";

const galleryImages = [
  { id: 1, title: "Chocolate Delight", alt: "Chocolate fudge cake with rich ganache", image: chocolateCake },
  { id: 2, title: "Berry Bliss", alt: "Fresh berry tart with strawberries and blueberries", image: berryTart },
  { id: 3, title: "Caramel Heaven", alt: "Caramel drip cake with golden sauce", image: caramelCake },
  { id: 4, title: "Vanilla Dream", alt: "Vanilla cupcakes with swirled frosting", image: vanillaCupcakes },
  { id: 5, title: "Pastry Paradise", alt: "Assorted French pastries and croissants", image: pastries },
  { id: 6, title: "Sweet Treats", alt: "Colorful French macarons", image: macarons },
];

const Gallery = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [isPaused, setIsPaused] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  return (
    <section id="gallery-section" className="min-h-screen py-20 relative" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Gallery</h2>
          <p className="text-xl text-muted-foreground">A visual feast of our creations</p>
        </motion.div>

        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className={`flex gap-8 ${!isPaused ? "animate-scroll-horizontal" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <motion.div
                key={`${image.id}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: (index % galleryImages.length) * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-primary/20 to-accent/20 min-w-[300px] md:min-w-[400px]"
              >
                <img
                  src={image.image}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="absolute bottom-0 left-0 right-0 p-6 z-20"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-2">{image.title}</h3>
                  <p className="text-muted-foreground">{image.alt}</p>
                </motion.div>

                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300 rounded-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
