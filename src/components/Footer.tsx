import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Logisco</h3>
            <p className="text-primary-foreground/80 text-sm">
              Votre partenaire de confiance pour tous vos besoins en transport et logistique.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">Transport Maritime</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Transport Terrestre</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Transport Ferroviaire</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Entreposage</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">À Propos</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Carrières</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@logisco.fr</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Logisco. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
