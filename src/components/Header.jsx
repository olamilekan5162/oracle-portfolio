import { useState, useEffect, useContext } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "react-router-dom";
import { developerInfo } from "../lib/data";
import Button from "./ui/Button";
import MobileMenu from "./modals/MobileMenu";
import { ThemeContext } from "../context/ThemeContext";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      let currentSection = "";
      sections.forEach((section) => {
        if (section && window.scrollY >= section.offsetTop - 150) {
          currentSection = `#${section.id}`;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 border-b border-border backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            to={"/"}
            className="text-foreground hover:text-primary text-xl font-bold tracking-tighter transition-colors"
          >
            {developerInfo.name}
          </Link>

          <div className="hidden items-center space-x-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="flex items-center justify-center cursor-pointer"
            >
              {theme === "light" ? (
                <Sun
                  size={18}
                  className="rotate-0 scale-100 transition-transform duration-300 "
                />
              ) : (
                <Moon
                  size={18}
                  className="rotate-0 scale-100 transition-transform duration-300 "
                />
              )}
            </Button>
            <div className="hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex items-center justify-center cursor-pointer"
              >
                <Menu size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isActive={activeSection}
      />
    </nav>
  );
}
