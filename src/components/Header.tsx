import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu-section" },
  { name: "Gallery", href: "#gallery-section" },
  { name: "About", href: "#about" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    const homeElement = document.querySelector("#home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#8B4513] backdrop-blur-md shadow-lg border-b border-[#654321]" // Rich brown background
          : "bg-[#8B4513]" // Same brown color
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section - NO ANIMATION */}
          <div 
            className="logo cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="logo-icon">
              <img 
                src="/Logo1.png" 
                alt="The Cake Bar Logo" 
                className="logo-image"
                draggable={false}
              />
            </div>
            <div className="logo-text">
              <h1>The Cake Bar</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-white hover:text-amber-200 transition-colors duration-300 font-medium relative group cursor-pointer text-lg"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-amber-200 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full hover:bg-[#654321] text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-[#8B4513] rounded-lg shadow-lg border border-[#654321]">
            <div className="flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-amber-200 hover:bg-[#654321] transition-colors duration-300 font-medium px-6 py-3 text-left cursor-pointer text-lg"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* CSS Styles */}
      <style jsx>{`
        .logo {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .logo-icon {
          width: 100px;
          height: 100px;
          background-color: #f8e3d0;
          border-radius: 70%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          border: 5px solid #bd700cff;
        }
        
        .logo-image {
          width: 85%;
          height: auto;
          border-radius: 70%;
          object-fit: fit;
        }
        
        .logo-text h1 {
          font-size: 45px;
          color: #FFFFFF; /* White text for dominance */
          margin: 0;
          font-weight: 800;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .logo-text h1 {
            font-size: 35px;
          }
          
          .logo-icon {
            width: 90px;
            height: 80px;
          }
        }

        @media (max-width: 640px) {
          .logo-text h1 {
            font-size: 28px;
          }
          
          .logo-icon {
            width: 80px;
            height: 70px;
            border-width: 4px;
          }
        }

        @media (max-width: 480px) {
          .logo {
            gap: 10px;
          }
          
          .logo-text h1 {
            font-size: 24px;
          }
          
          .logo-icon {
            width: 70px;
            height: 60px;
            border-width: 3px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;