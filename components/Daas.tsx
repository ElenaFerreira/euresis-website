import React from "react";
import { SectionTitle } from "./shared/SectionTitle";
import { Button } from "./shared/Button";
import { CheckCircleIcon } from "lucide-react";
export function DaasSection() {
  const advantages = [
    "Transformation des anciens postes en terminaux légers",
    "Machines virtuelles hébergées dans le cloud (AWS)",
    "Entièrement personnalisables (RAM, stockage, OS, logiciels)",
    "Sécurité renforcée avec cryptage et conformité RGPD",
    "Sauvegardes automatiques",
    "Support technique disponible 7j/7",
    "Abonnement sans engagement",
    "Démo ou test possible selon les cas",
  ];
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-center">Notre Solution DaaS</SectionTitle>
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-8">
          <div className="lg:w-1/2">
            <div className="bg-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Desktop as a Service</h3>
              <p className="mb-6">
                Notre solution DaaS offre des ordinateurs virtuels accessibles via le firmware, entièrement personnalisables et hébergés sur le cloud
                via AWS. Idéale pour les PME sans service informatique interne.
              </p>
              <Button primary={false}>Demander une démo</Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Avantages</h3>
            <ul className="space-y-3">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
