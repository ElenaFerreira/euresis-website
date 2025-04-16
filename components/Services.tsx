import React from "react";
import { SectionTitle } from "./shared/SectionTitle";
import { CodeIcon, ServerIcon, ShieldIcon, CloudIcon } from "lucide-react";
export function ServicesSection() {
  const services = [
    {
      title: "Développement Logiciel",
      description: "Applications sur mesure adaptées à vos processus métier",
      icon: <CodeIcon className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Gestion d'Infrastructure IT",
      description: "Maintenance et optimisation de votre environnement informatique",
      icon: <ServerIcon className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Cybersécurité",
      description: "Protection de vos données et systèmes contre les menaces",
      icon: <ShieldIcon className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Desktop as a Service (DaaS)",
      description: "Postes de travail virtuels hébergés sur le cloud",
      icon: <CloudIcon className="w-12 h-12 text-blue-600" />,
      highlight: true,
    },
  ];
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-center">Nos Services</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg transition-all duration-300 flex flex-col items-center ${
                service.highlight ? "bg-blue-50 border-2 border-blue-200 hover:shadow-lg" : "bg-white border border-gray-100 hover:shadow-md"
              }`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
