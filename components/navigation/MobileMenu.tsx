import React from "react";
import { Link } from "react-scroll";
import { Button } from "../shared/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{
    title: string;
    to: string;
  }>;
}
export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-40 md:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      {/* Menu panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex-1 px-4 py-6 space-y-6 pt-20">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="block text-lg text-gray-600 hover:text-primary cursor-pointer transition-colors"
                activeClass="text-primary font-medium"
                onClick={onClose}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200">
            <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} onClick={onClose}>
              <Button primary>Obtenir un devis</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
