import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";
import { ContactForm } from "./ContactForm";

export const HeroSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <ContactForm open={isContactOpen} onOpenChange={setIsContactOpen} type="contact" />
    <section className="relative min-h-[600px] flex items-center bg-primary overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-accent font-semibold">
              Solutions de Transport Logistique
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Bienvenue chez Logisco
            <br />
            Services de Transport de Fret
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Confiez vos marchandises à notre expertise. Logisco offre des solutions 
            de transport fiables et efficaces pour tous vos besoins logistiques.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="group" onClick={scrollToServices}>
              Découvrir nos Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setIsContactOpen(true)}
            >
              Nous Contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
