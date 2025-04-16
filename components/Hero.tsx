"use client";

import React from "react";
import { Button } from "./shared/Button";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import dynamic from "next/dynamic";
import scrollAnimation from "../public/lottie/scroll.json";

export const HeroSection = () => {
  const LottieScroll = dynamic(() => import("./LottieClientOnly"), { ssr: false });

  return (
    <section className="relative w-full bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
      {/* Effet visuel de fond */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 min-h-screen flex items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">Euresis</h1>
          <p className="text-xl md:text-2xl font-medium mb-6">L&rsquo;informatique B2B à visage humain</p>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Solutions numériques sur mesure pour PME, avec un accompagnement personnalisé et une expertise à taille humaine.
          </p>

          <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
            <Button primary>Obtenir un devis</Button>
          </Link>
        </motion.div>
      </div>

      {/* Lottie scroll hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 size-6">
        <LottieScroll animationData={scrollAnimation} />
      </div>
    </section>
  );
};
