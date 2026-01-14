import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-kenya.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kenyan savanna at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
            <Heart className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-sm font-medium text-primary-foreground">
              Exclusive Dating for Kenyans 45+ in Toronto
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Find Your
            <span className="block text-secondary mt-2">Kindred Spirit</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Connect with accomplished Kenyan singles in Toronto who share your 
            values, culture, and life experience. Real connections start here.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/register">
                <Heart className="w-5 h-5 mr-2" />
                Start Your Journey
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/events">Browse Mixer Events</Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-secondary/80 border-2 border-foreground/50 flex items-center justify-center text-xs font-medium text-secondary-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span>500+ members</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-primary-foreground/30" />
            <span>150+ successful matches</span>
            <div className="hidden sm:block w-px h-4 bg-primary-foreground/30" />
            <span>Safe & verified</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
}
