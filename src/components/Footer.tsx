import { motion } from "framer-motion";
import { Github, Linkedin, Globe, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Logo Section - Updated */}
          <div className="flex flex-col items-center justify-center mb-6">
            {/* Logo Image */}
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <a>
              <img 
                src="/QuickSite Logo.png" 
                alt="QuickSite Logo" 
                className="w-20 h-20 object-contain rounded-full"
              /></a>
            </div>
            
            {/* Main Text under Logo */}
            <h1 className="text-3xl font-bold text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Quick Site
            </h1>
            <p className="text-sm text-muted-foreground mt-2 font-medium">
              ONE PAGE • BIG IMPACT
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground">Let's Build Something Great</h2>
          <p className="text-muted-foreground text-lg">
            Logic-Based Solutions | Step-in • Make-day • Live!
          </p>

          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/quicksite00"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Github className="w-6 h-6 text-primary" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/quick-site-r/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-primary" />
            </motion.a>
            <motion.a
              href="https://quick-site-00.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Globe className="w-6 h-6 text-primary" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/quick.site00/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Instagram className="w-6 h-6 text-primary" />
            </motion.a>
            <motion.a
              href="mailto:quicksite00@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Mail className="w-6 h-6 text-primary" />
            </motion.a>
          </div>

          <div className="pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} The Cake Bar. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Powered by{" "}
              <a
                href="https://quick-site-00.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                QuickSite
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;