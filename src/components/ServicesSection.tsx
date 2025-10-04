import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import maritimeImage from "@/assets/maritime-freight.jpg";
import landImage from "@/assets/land-freight.jpg";
import trainImage from "@/assets/train-freight.jpg";

const services = [
  {
    title: "Transport Maritime",
    description: "Solutions complètes de fret maritime pour vos expéditions internationales avec suivi en temps réel.",
    image: maritimeImage,
  },
  {
    title: "Transport Terrestre",
    description: "Services de transport routier fiables pour livraisons locales et régionales avec garantie de ponctualité.",
    image: landImage,
  },
  {
    title: "Transport Ferroviaire",
    description: "Solutions de fret ferroviaire économiques et écologiques pour vos volumes importants.",
    image: trainImage,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
            <span className="text-accent font-semibold">Nos Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Large Gamme de Services Logistiques
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions adaptées à tous vos besoins de transport et de logistique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="group/button">
                  En Savoir Plus
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
