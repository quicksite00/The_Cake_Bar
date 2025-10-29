import { motion } from "framer-motion";
import { Github, Linkedin, Globe, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-6 border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          {/* Quick Site Logo and Link */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full border-2 border-primary/50 bg-amber-50 dark:bg-card flex items-center justify-center overflow-hidden shadow-md">
              <img 
                src="/favicon.png" 
                alt="Quick Site Logo" 
                className="w-12 h-12 object-contain select-none rounded-full"
              />
            </div>
            <a
              href="https://quick-site-00.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-primary hover:text-primary/80 transition-colors duration-300 hover:scale-105 transform inline-block"
            >
              Quick Site
            </a>
          </div>

          {/* Social Links Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
              Connect With Us
            </h3>
            <p className="text-xs text-muted-foreground">Follow our journey on social media</p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <motion.a
                href="https://github.com/quicksite00"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/quick-site-r/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://quick-site-00.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/quick.site00/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:quicksite00@gmail.com"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-border/30 w-full">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} The Cake Bar. All rights reserved. Powered by{" "}
              <a
                href="https://quick-site-00.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold transition-colors duration-300 hover:underline"
              >
                Quick Site
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;