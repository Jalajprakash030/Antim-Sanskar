import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
  href?: string;
}

export function ServiceCard({ title, description, image, icon, href = "/services" }: ServiceCardProps) {
  return (
    <Link href={href}>
      <a className="block group h-full">
        <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300 h-full bg-white">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-serif text-xl font-medium text-foreground">{title}</h3>
              {icon && <div className="text-primary/80">{icon}</div>}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {description}
            </p>
            <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
              Learn more <ArrowRight className="ml-1 size-4" />
            </div>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
}
