"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "../shared/Button";
import { MobileMenu } from "./MobileMenu";
import Image from "next/image";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      title: "Qui sommes-nous",
      to: "presentation",
    },
    {
      title: "Services",
      to: "services",
    },
    {
      title: "Offre DaaS",
      to: "daas",
    },
    {
      title: "Témoignages",
      to: "testimonials",
    },
    {
      title: "Pourquoi nous choisir",
      to: "why-choose-us",
    },
    {
      title: "Contact",
      to: "contact",
    },
  ];

  return (
    <div>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-foreground/70 backdrop-blur-sm shadow-sm" : "bg-foreground"
        }`}
      >
        <div className="w-full">
          <div className="w-full flex items-center justify-between px-8 gap-3 h-16 md:h-20">
            <div className="w-[183px]">
              <Link to="hero" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer">
                <Image src="/images/logo-euresis.png" alt="Euresis Logo" width={140} height={40} className="w-15 mr-2" priority />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-600 hover:text-primary cursor-pointer transition-colors text-nowrap"
                  activeClass="text-primary font-medium"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-8 text-nowrap">
              <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
                <Button primary>Obtenir un devis</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} links={navLinks} />
    </div>
  );
};
