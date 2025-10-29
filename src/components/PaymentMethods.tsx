import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import jazzCashLogo from "@/assets/payment-jazzcash-accurate.png";
import codLogo from "@/assets/payment-cod.png";

const easyPaisaLogo = "data:image/png;base64,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";
const visaLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const paymentMethods = [
  { id: 1, name: "JazzCash", logo: jazzCashLogo, alt: "JazzCash payment method" },
  { id: 2, name: "EasyPaisa", logo: easyPaisaLogo, alt: "EasyPaisa payment method" },
  { id: 3, name: "Visa Card", logo: visaLogo, alt: "Visa card payment" },
  { id: 4, name: "Cash on Delivery", logo: codLogo, alt: "Cash on delivery" },
];

const PaymentMethods = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  const { toast } = useToast();

  const handlePaymentClick = (methodName: string) => {
    setSelectedMethod(methodName);
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Order Received!",
      description: `We'll contact you shortly to confirm your order with ${selectedMethod} payment.`,
    });
    setIsDialogOpen(false);
  };

  return (
    <section id="payment-methods" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-primary hover:scale-105 transition-transform duration-300 inline-block cursor-pointer">Payment Methods</h2>
          <p className="text-xl text-muted-foreground">We accept multiple payment options for your convenience</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => handlePaymentClick(method.name)}
              className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift cursor-pointer"
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

        {/* Payment Form Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Place Your Order</DialogTitle>
              <DialogDescription>
                Fill in your details to complete your order with {selectedMethod}.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" required placeholder="03XX-XXXXXXX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address</Label>
                <Textarea id="address" required placeholder="Enter your complete address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="order">Order Details</Label>
                <Textarea id="order" required placeholder="What would you like to order?" />
              </div>
              <div className="flex gap-3 justify-end">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  Place Order
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PaymentMethods;
