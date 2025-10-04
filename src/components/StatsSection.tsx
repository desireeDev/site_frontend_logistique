import { Package, Ship, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: Package,
    value: "50k+",
    label: "Livraisons Réussies",
  },
  {
    icon: Ship,
    value: "256",
    label: "Transporteurs Partenaires",
  },
  {
    icon: Globe,
    value: "25+",
    label: "Pays Desservis",
  },
  {
    icon: Award,
    value: "125",
    label: "Années d'Expérience",
  },
];

export const StatsSection = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex items-center gap-4 text-primary-foreground">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/80">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
