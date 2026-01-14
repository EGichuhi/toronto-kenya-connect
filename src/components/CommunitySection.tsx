import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Sparkles, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Shield,
    title: "Verified Members",
    description: "Every member is verified to ensure authentic, serious connections.",
  },
  {
    icon: Users,
    title: "45+ Community",
    description: "Connect with mature singles who understand your life stage and values.",
  },
  {
    icon: Heart,
    title: "Cultural Match",
    description: "Share your Kenyan heritage with someone who truly understands it.",
  },
  {
    icon: Sparkles,
    title: "Quality Events",
    description: "Elegant mixers and dinners designed for meaningful introductions.",
  },
];

const benefits = [
  "Meet accomplished professionals like yourself",
  "In-person events in safe, upscale venues",
  "Respect for tradition and family values",
  "Active, engaged community",
  "Discreet and confidential",
];

export function CommunitySection() {
  return (
    <section className="py-24 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 pattern-kente" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                Why Nyumbani?
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
                Dating Done Right
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed text-lg">
                We understand that finding love at this stage of life is different. 
                That's why we've created a space specifically for accomplished 
                Kenyans in Toronto who are ready for meaningful connections.
              </p>
            </div>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-primary-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="warm" size="lg" asChild>
              <Link to="/register">
                <Heart className="w-4 h-4 mr-2" />
                Join Free Today
              </Link>
            </Button>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur-sm text-primary-foreground"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
