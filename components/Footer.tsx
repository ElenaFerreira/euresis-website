import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-secondary text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold">Euresis</h3>
          <p className="text-gray-300">L&rsquo;informatique B2B à visage humain</p>
        </div>
        <div className="text-sm text-gray-400">
          <p>&copy; {currentYear} Euresis. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
