import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "react-router-dom";
import { developerInfo } from "../lib/data";
import Button from "./ui/Button";
import MobileMenu from "./modals/MobileMenu";

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
              className="flex items-center justify-center cursor-pointer"
            >
              {/* <Sun
                size={18}
                className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              /> */}
              <Moon
                size={18}
                className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              />
            </Button>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex items-center justify-center cursor-pointer"
              >
                <Menu size={18} />
              </Button>
            </div>

            {/* <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="bg-background w-full max-w-xs p-6"
                >
                  <div className="flex flex-col space-y-6">
                    <Link
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-foreground text-xl font-bold tracking-tighter"
                    >
                      {developerInfo.name}
                    </Link>
                    <nav className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                        <NavLink key={link.href} {...link} />
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div> */}
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
