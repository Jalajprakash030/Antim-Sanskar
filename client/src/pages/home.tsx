import { BookingForm } from "@/components/booking-form";

// In Home.tsx, I used a placeholder custom element <booking-form-placeholder />
// I need to replace it with the actual component in the file content.
// Or better, I can just fix Home.tsx to import and use BookingForm directly.
// Wait, I already wrote Home.tsx but I put <booking-form-placeholder /> in the JSX.
// Let me correct Home.tsx to actually use the BookingForm component.

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { ArrowRight, Phone, Heart, Clock, ShieldCheck, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-peaceful.png" 
            alt="Peaceful Sunrise" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background z-10" />
        </div>

        {/* Content */}
        <div className="container relative z-20 px-4 text-center text-white pt-20">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Compassionate & Dignified Care
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            We Handle Everything <br/> With Care & Respect
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Providing complete end-to-end funeral and after-death services. 
            Let us shoulder the burden so you can focus on healing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link href="/booking">
              <Button size="lg" className="rounded-full px-8 h-12 text-base w-full sm:w-auto bg-primary hover:bg-primary/90 border-none shadow-lg hover:shadow-xl transition-all">
                Arrange Now
              </Button>
            </Link>
            <a href="tel:5551234567">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white">
                <Phone className="mr-2 size-4" /> Get Immediate Assistance
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">How We Support You</h2>
            <div className="w-20 h-1 bg-primary/30 mx-auto mb-6 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple, guided process to help you honor your loved ones without the stress of logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
             {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-border z-0" />

            {/* Step 1 */}
            <div className="relative z-10 text-center group">
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <span className="font-serif text-3xl text-primary font-medium">1</span>
              </div>
              <h3 className="font-serif text-xl mb-3">Submit Details</h3>
              <p className="text-muted-foreground px-4">
                Share your location, cultural preferences, and requirements through our simple form or a quick call.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 text-center group">
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <span className="font-serif text-3xl text-primary font-medium">2</span>
              </div>
              <h3 className="font-serif text-xl mb-3">Customized Planning</h3>
              <p className="text-muted-foreground px-4">
                We arrange everything based on your traditions—priests, venues, transportation, and rituals.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 text-center group">
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <span className="font-serif text-3xl text-primary font-medium">3</span>
              </div>
              <h3 className="font-serif text-xl mb-3">Execution & Support</h3>
              <p className="text-muted-foreground px-4">
                Our team handles the entire execution with dignity, providing on-ground support for the family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-xl">
                Comprehensive care tailored to every need, religion, and custom.
              </p>
            </div>
            <Link href="/services">
              <Button variant="ghost" className="hidden md:flex text-primary hover:text-primary/80 hover:bg-transparent px-0 group">
                View All Services <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Cremation & Burial"
              description="Respectful arrangements for both cremation and burial services, coordinated with local authorities and grounds."
              image="/images/service-lilies.png"
              icon={<Heart className="size-5" />}
            />
            <ServiceCard 
              title="Religious Rituals"
              description="Arrangements for Hindu, Muslim, Christian, Sikh, and other traditions with experienced priests and leaders."
              image="/images/service-ritual.png"
              icon={<ShieldCheck className="size-5" />}
            />
            <ServiceCard 
              title="Documentation Support"
              description="Complete assistance with death certificates, permits, and legal paperwork to ease your administrative burden."
              image="/images/service-support.png"
              icon={<Clock className="size-5" />}
            />
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/services">
              <Button variant="outline" className="w-full">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Support Strip */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-medium mb-2">Need Immediate Assistance?</h3>
            <p className="text-primary-foreground/80">Our compassionate team is available 24/7 to help you.</p>
          </div>
          <div className="flex gap-4">
             <a href="tel:5551234567">
              <Button size="lg" variant="secondary" className="font-medium shadow-lg">
                <Phone className="mr-2 size-4" /> Call (555) 123-4567
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Families We've Supported</h2>
            <div className="w-20 h-1 bg-primary/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-secondary/20 p-8 rounded-xl border border-border/50 relative">
              <span className="absolute top-6 left-6 text-6xl text-primary/10 font-serif">"</span>
              <p className="text-muted-foreground italic mb-6 relative z-10 pt-4">
                "During our most difficult time, Eternal Peace handled everything with such grace. I didn't have to worry about a single logistical detail, which allowed me to be present with my family."
              </p>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  S
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Sarah Jenkins</h4>
                  <p className="text-xs text-muted-foreground">San Diego, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 p-8 rounded-xl border border-border/50 relative">
              <span className="absolute top-6 left-6 text-6xl text-primary/10 font-serif">"</span>
              <p className="text-muted-foreground italic mb-6 relative z-10 pt-4">
                "They understood our cultural traditions perfectly. The priest they arranged was wonderful, and every ritual was conducted exactly as we wanted. Highly recommended for their sensitivity."
              </p>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  R
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Rahul Sharma</h4>
                  <p className="text-xs text-muted-foreground">Fremont, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-secondary/30" id="contact">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Let Us Help You</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you need immediate assistance or are planning ahead, please fill out the form below. 
                We will guide you through every step with transparency and care.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">24/7 Support</h4>
                    <p className="text-sm text-muted-foreground">Available any time of day or night</p>
                    <a href="tel:5551234567" className="text-primary font-medium hover:underline">(555) 123-4567</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Service Areas</h4>
                    <p className="text-sm text-muted-foreground">We serve the entire metropolitan area and surrounding suburbs.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-border mt-8">
                  <h4 className="font-serif text-lg mb-2">Transparent Pricing</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    We offer Basic, Standard, and Premium packages designed to fit different needs and budgets. 
                    No hidden costs.
                  </p>
                  <Link href="/services">
                    <a className="text-sm font-medium text-primary hover:underline">View Pricing Packages &rarr;</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border">
              <div className="mb-6">
                 <h3 className="font-serif text-2xl mb-1">Request Assistance</h3>
                 <p className="text-sm text-muted-foreground">Fill in the details below and we will contact you immediately.</p>
              </div>
              <div id="booking-form-container">
                 <BookingForm /> 
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
