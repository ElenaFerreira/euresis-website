import React from "react";
import { SectionTitle } from "./shared/SectionTitle";
import { UserIcon, HeartHandshakeIcon, ClockIcon, TrendingUpIcon } from "lucide-react";
export function PresentationSection() {
  const engagements = [
    {
      title: "Proximité",
      description: "Un interlocuteur dédié pour comprendre vos besoins spécifiques",
      icon: <UserIcon className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Écoute",
      description: "Des solutions adaptées à vos contraintes et objectifs",
      icon: <HeartHandshakeIcon className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Réactivité",
      description: "Une équipe disponible pour répondre rapidement à vos demandes",
      icon: <ClockIcon className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Accompagnement",
      description: "Un partenariat sur le long terme pour votre transformation numérique",
      icon: <TrendingUpIcon className="w-6 h-6 text-blue-600" />,
    },
  ];
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-center">À propos d'Euresis</SectionTitle>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Euresis est une entreprise informatique B2B à taille humaine, spécialisée dans l'accompagnement des PME dans leur transformation
            numérique. Notre approche combine expertise technique, réactivité et service personnalisé pour répondre précisément aux besoins de nos
            clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {engagements.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
