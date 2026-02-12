import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookingForm } from "@/components/booking-form";
import { Phone, MapPin } from "lucide-react";

export default function Booking() {
  return (
    <div className="min-h-screen bg-secondary/30 font-sans">
      <Navbar />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="font-serif text-4xl md:text-5xl mb-4">Arrange a Service</h1>
              <p className="text-muted-foreground text-lg">
                Please provide the details below. Our team handles everything with care, 
                respecting your cultural and personal preferences.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-border p-6 md:p-10">
              <BookingForm />
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-2">Prefer to speak to someone directly?</p>
              <a href="tel:5551234567" className="inline-flex items-center gap-2 text-primary font-medium text-lg hover:underline">
                <Phone className="size-5" /> Call our 24/7 Helpline: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
