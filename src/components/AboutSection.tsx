import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const values = [
  "Excellence du service client",
  "Fiabilité et ponctualité",
  "Solutions sur mesure",
  "Respect de l'environnement",
];

export const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-semibold">À Propos de Nous</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Leader Européen en Transport et Logistique
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Depuis plus de 25 ans, Logisco accompagne les entreprises dans leurs défis 
              logistiques avec des solutions innovantes et fiables. Notre engagement envers 
              l'excellence nous a permis de devenir un partenaire de confiance pour des 
              milliers d'entreprises à travers l'Europe.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Avec une flotte moderne, un réseau mondial de partenaires et une équipe 
              d'experts dévoués, nous garantissons la sécurité et la ponctualité de vos 
              expéditions, quelle que soit leur destination.
            </p>
          </div>

          <Card className="bg-secondary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Nos Valeurs
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-lg text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
