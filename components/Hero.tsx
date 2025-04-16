import React from "react";
import { Button } from "./shared/Button";
export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Euresis</h1>
          <p className="text-xl md:text-2xl font-medium mb-6">L'informatique B2B à visage humain</p>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Solutions numériques sur mesure pour PME, avec un accompagnement personnalisé et une expertise à taille humaine.
          </p>
          <Button primary>Obtenir un devis</Button>
        </div>
      </div>
    </section>
  );
}
