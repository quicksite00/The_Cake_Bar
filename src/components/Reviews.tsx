import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const reviews = [
  {
    name: "Sarah John",
    rating: 5,
    text: "Absolutely the best bakery in town! Their caramel cake is to die for. Every bite is pure heaven.",
    date: "2 weeks ago",
  },
  {
    name: "Faisal Arslan",
    rating: 5,
    text: "Ordered a custom cake for my daughter's birthday. It was not only beautiful but tasted amazing! Highly recommend.",
    date: "1 month ago",
  },
  {
    name: "Eman zahra",
    rating: 5,
    text: "The pastries here are incredible! Fresh, flaky, and full of flavor. My go-to spot for morning treats.",
    date: "3 weeks ago",
  },
  {
    name: "Moiz",
    rating: 5,
    text: "Great quality and excellent service. The staff is friendly and the atmosphere is cozy. Love this place!",
    date: "1 week ago",
  },
  {
    name: "Noman",
    rating: 4,
    text: "Their desserts are works of art! Beautiful presentation and delicious taste. Perfect for special occasions.",
    date: "2 months ago",
  },
  {
    name: "Kinza",
    rating: 5,
    text: "Been coming here for years. Consistency is key and they never disappoint. The chocolate fudge cake is my favorite!",
    date: "3 days ago",
  },
];

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="reviews" className="min-h-screen py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Reviews</h2>
          <p className="text-xl text-muted-foreground">What our customers say</p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-lg font-semibold">5.0 / 5.0</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name + index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="hover-lift bg-card/80 backdrop-blur-sm border-border/50 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed">{review.text}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground">
            Join our happy customers and experience the sweetness yourself!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
