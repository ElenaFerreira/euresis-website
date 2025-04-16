import React from "react";
import { SectionTitle } from "./shared/SectionTitle";
import { Button } from "./shared/Button";
import { MailIcon } from "lucide-react";
export function ContactSection() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24" id="contact">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-center text-secondary">Contactez-nous</SectionTitle>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center justify-center mb-6 text-primary">
            <MailIcon className="size-6 mr-2" />
            <a href="mailto:contact.euresis@gmail.com" className="hover:underline">
              contact.euresis@gmail.com
            </a>
          </div>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Nom de votre entreprise"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="need" className="block mb-2 text-sm font-medium text-gray-700">
                Besoin
              </label>
              <select id="need" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" required>
                <option value="">Sélectionner un service</option>
                <option value="daas">Desktop as a Service (DaaS)</option>
                <option value="development">Développement logiciel</option>
                <option value="infrastructure">Gestion d&rsquo;infrastructure IT</option>
                <option value="security">Cybersécurité</option>
                <option value="other">Autre</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="Décrivez votre projet ou vos besoins"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <Button type="submit">Obtenir un devis</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
