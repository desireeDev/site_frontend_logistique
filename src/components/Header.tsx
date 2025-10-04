import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const Header = () => {
  const [isDevisOpen, setIsDevisOpen] = useState(false);

  return (
    <>
      <ContactForm open={isDevisOpen} onOpenChange={setIsDevisOpen} type="devis" />
    <header className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">
              Logisco
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#apropos" className="text-foreground hover:text-primary transition-colors">
              À Propos
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+33 1 23 45 67 89</span>
            </div>
            <Button variant="hero" size="lg" onClick={() => setIsDevisOpen(true)}>
              Demander un Devis
            </Button>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};
