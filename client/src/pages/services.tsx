import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Basic",
    description: "Essential services for a dignified farewell.",
    price: "Starting at $2,500",
    features: [
      "Coordination of all arrangements",
      "Documentation & permits",
      "Simple transportation",
      "Basic ceremonial setup",
      "Online memorial page",
    ],
  },
  {
    name: "Standard",
    description: "Comprehensive care with added support and traditional rituals.",
    price: "Starting at $4,500",
    isPopular: true,
    features: [
      "Everything in Basic",
      "Priest / Religious Leader booking",
      "Floral arrangements",
      "Premium transportation",
      "Assistance with obituaries",
      "On-site coordinator",
    ],
  },
  {
    name: "Premium",
    description: "Complete end-to-end service with premium amenities.",
    price: "Starting at $7,000",
    features: [
      "Everything in Standard",
      "Premium venue arrangement",
      "Live streaming of ceremony",
      "Catering coordination",
      "Memory keepsakes",
      "Grief counseling support sessions",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <div className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Our Services & Packages</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer transparent, respectful, and customizable options to honor your loved ones. 
            Choose a package that fits your needs, or contact us for a custom arrangement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {packages.map((pkg) => (
            <div 
              key={pkg.name} 
              className={`relative bg-white rounded-2xl border ${pkg.isPopular ? 'border-primary shadow-lg ring-1 ring-primary/20' : 'border-border shadow-sm'} p-8 flex flex-col`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Most Chosen
                </div>
              )}
              <h3 className="font-serif text-2xl font-medium mb-2">{pkg.name}</h3>
              <p className="text-muted-foreground text-sm mb-6 h-10">{pkg.description}</p>
              <div className="text-xl font-bold text-foreground mb-8">{pkg.price}</div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="size-5 text-primary shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/booking">
                <Button 
                  className={`w-full ${pkg.isPopular ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                >
                  Choose {pkg.name}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Detailed Service List */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl mb-8 text-center">Specific Services</h2>
          <div className="space-y-12">
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden">
                <img src="/images/service-lilies.png" alt="Cremation" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="font-serif text-2xl mb-3">Cremation & Burial</h3>
                <p className="text-muted-foreground mb-4">
                  We handle all logistics for cremation or burial, including coordination with cemeteries and crematoriums, urn or casket selection assistance, and transportation.
                </p>
                <Link href="/booking">
                  <span className="text-primary font-medium hover:underline cursor-pointer">Arrange Consultation &rarr;</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden">
                <img src="/images/service-ritual.png" alt="Rituals" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="font-serif text-2xl mb-3">Religious & Cultural Rituals</h3>
                <p className="text-muted-foreground mb-4">
                  Respecting traditions is at our core. We have a network of priests and religious leaders for Hindu, Muslim, Christian, Sikh, and Buddhist ceremonies. We arrange all necessary items (samagri) and ensure rituals are conducted correctly.
                </p>
                <Link href="/booking">
                  <span className="text-primary font-medium hover:underline cursor-pointer">Learn More &rarr;</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden">
                <img src="/images/service-support.png" alt="Legal Support" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="font-serif text-2xl mb-3">Documentation & Legal Assistance</h3>
                <p className="text-muted-foreground mb-4">
                  The paperwork can be overwhelming. We assist with obtaining death certificates, burial/cremation permits, and other necessary legal documentation to ease your burden during this time.
                </p>
                <Link href="/booking">
                  <span className="text-primary font-medium hover:underline cursor-pointer">Get Help &rarr;</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
