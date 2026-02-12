import { Link } from "wouter";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/">
              <a className="flex items-center gap-2 group">
                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xl">🕊️</span>
                </div>
                <span className="font-serif text-xl font-medium tracking-wide">
                  Eternal Peace
                </span>
              </a>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Providing compassionate, end-to-end funeral and after-death services. 
              We are here to support you through every step with dignity and respect.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Cremation & Burial</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Religious Rituals</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Transportation</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Memorial Services</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact</a></Link></li>
              <li><Link href="/booking"><a className="hover:text-primary transition-colors">Plan Ahead</a></Link></li>
              <li><Link href="/faq"><a className="hover:text-primary transition-colors">FAQ</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Serenity Lane, Peaceful Valley, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-primary shrink-0" />
                <a href="tel:5551234567" className="text-muted-foreground hover:text-primary">24/7: (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-primary shrink-0" />
                <a href="mailto:care@eternalpeace.com" className="text-muted-foreground hover:text-primary">care@eternalpeace.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Eternal Peace Services. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="size-3 text-red-400 fill-red-400" />
            <span>for families in need.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
