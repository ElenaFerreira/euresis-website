import React from "react";
import { SectionTitle } from "./shared/SectionTitle";
import { UsersIcon, PuzzleIcon, ZapIcon, LockIcon, PiggyBankIcon } from "lucide-react";
export function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Accompagnement Humain",
      description: "Un interlocuteur dédié qui comprend vos enjeux",
      icon: <UsersIcon className="size-8 text-tertiary" />,
    },
    {
      title: "Solutions Sur Mesure",
      description: "Des services adaptés à vos besoins spécifiques",
      icon: <PuzzleIcon className="size-8 text-tertiary" />,
    },
    {
      title: "Réactivité",
      description: "Une équipe disponible et à l'écoute",
      icon: <ZapIcon className="size-8 text-tertiary" />,
    },
    {
      title: "Sécurité",
      description: "Protection optimale de vos données et systèmes",
      icon: <LockIcon className="size-8 text-tertiary" />,
    },
    {
      title: "Économique",
      description: "Pas d'investissement initial, uniquement des frais opérationnels",
      icon: <PiggyBankIcon className="size-8 text-tertiary" />,
    },
  ];
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-center text-secondary">Pourquoi Nous Choisir</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center text-primary">{reason.title}</h3>
              <p className="text-gray-600 text-center">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
