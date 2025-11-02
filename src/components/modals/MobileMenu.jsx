import { useEffect } from "react";
import { X } from "lucide-react";
import Button from "../ui/Button";
import { developerInfo } from "../../lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function MobileMenu({ isOpen, onClose, isActive }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/80 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-background text-foreground shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-0 pt-2 pr-2">
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="flex items-center justify-center self-end"
          >
            <X size={15} />
          </Button>
        </div>

        <div className="flex flex-col gap-6 px-6 text-muted-foreground">
          <a
            to="/"
            onClick={onClose}
            className="text-foreground text-xl font-bold tracking-tighter"
          >
            {developerInfo.name}
          </a>
          <nav className="flex flex-col gap-8 px-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`font-medium text-sm transition-colors duration-200${
                  isActive === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
