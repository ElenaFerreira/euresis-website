import React from "react";
import { QuoteIcon } from "lucide-react";
export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marie Dupont",
      position: "Directrice, Cabinet Comptable Dupont",
      content:
        "Grâce à la solution DaaS d'Euresis, nous avons pu moderniser notre infrastructure informatique sans investissement initial. Le service est fiable et l'équipe toujours disponible pour répondre à nos questions.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Thomas Martin",
      position: "Gérant, Agence Marketing VisualPlus",
      content:
        "Euresis a su comprendre nos besoins spécifiques et nous proposer une solution sur mesure. Leur approche humaine et leur expertise technique font toute la différence. Je les recommande vivement.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
  ];
  return (
    <section className="w-full bg-gray py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-secondary">Témoignages Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <QuoteIcon className="size-10 text-tertiary/40 mb-4" />
              <p className="text-gray-700 italic mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
