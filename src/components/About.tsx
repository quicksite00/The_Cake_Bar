import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Award, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Made with ❤️ Love",
    description: "Every creation is handcrafted with passion and care",
  },
  {
    icon: Award,
    title: "Premium Quality", 
    description: "Only the finest ingredients in all our recipes",
  },
  {
    icon: Users,
    title: "Community Favorite",
    description: "Trusted by thousands of happy customers",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="min-h-screen py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-primary hover:scale-105 transition-transform duration-300 inline-block cursor-pointer">
            About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bringing sweetness to life since 2020
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-video md:aspect-square rounded-3xl overflow-hidden hover-lift shadow-lg">
              <img 
               src="https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" 
                alt="The Cake Bar Bakery Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
              Our Story
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Cake Bar began with a simple dream: to create the most delicious, 
              beautiful desserts that bring joy to every occasion. What started in a 
              small kitchen has grown into a beloved bakery, but our commitment to 
              quality and taste remains unchanged.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in using only the finest ingredients, time-honored techniques, 
              and a generous helping of creativity in everything we bake. Each dessert 
              is a labor of love, crafted to make your special moments even sweeter.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
              className="text-center rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift p-8"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="inline-block p-4 rounded-full bg-primary/10 mb-6"
              >
                <feature.icon className="w-12 h-12 text-primary" />
              </motion.div>
              <h4 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h4>
              <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;