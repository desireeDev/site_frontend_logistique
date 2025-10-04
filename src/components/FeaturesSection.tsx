import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, MapPin, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Sécurité Garantie",
    description: "Protection complète de vos marchandises avec assurance tous risques incluse.",
  },
  {
    icon: Clock,
    title: "Livraison Rapide",
    description: "Respect des délais garantis avec suivi en temps réel de vos expéditions.",
  },
  {
    icon: MapPin,
    title: "Suivi en Direct",
    description: "Localisez vos marchandises à tout moment grâce à notre système de tracking.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description: "Équipe dédiée disponible à tout moment pour répondre à vos questions.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-semibold">Nos Avantages</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Nous Protégeons Vos Marchandises
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Logisco s'engage à fournir un service de qualité supérieure avec une attention 
              particulière à la sécurité et à l'intégrité de vos envois. Notre expertise et 
              notre réseau mondial garantissent des solutions logistiques adaptées à vos besoins.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Taux de Livraison</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">24h</div>
                <div className="text-sm text-muted-foreground">Temps de Réponse</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
