import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import cultureImage from "@/assets/cultural-dance.jpg";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Create Your Profile",
    description: "Sign up and tell us about yourself—your interests, values, and what you're looking for in a partner.",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Attend Our Events",
    description: "Join curated mixer dinners, speed dating nights, and cultural celebrations to meet singles in person.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Connect & Chat",
    description: "After events, connect with those who caught your eye through our secure messaging platform.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Find Your Match",
    description: "Build meaningful relationships with compatible Kenyan singles who share your journey.",
  },
];

export function CultureSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={cultureImage}
                alt="Community celebration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-3">
                    {["JM", "WK", "GO"].map((initials, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-secondary border-2 border-foreground/50 flex items-center justify-center text-xs font-semibold text-secondary-foreground"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <span className="text-primary-foreground text-sm">
                    Recently matched
                  </span>
                </div>
                <p className="text-primary-foreground font-display text-xl font-semibold">
                  "We met at a Nyumbani dinner. Six months later, we're inseparable."
                </p>
                <p className="text-primary-foreground/70 text-sm mt-1">
                  — James & Mary, Toronto
                </p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                How It Works
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Your Path to Connection
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe the best connections happen in person. That's why we focus 
                on bringing people together at carefully curated events.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-secondary">{step.number}</span>
                      <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" asChild>
              <Link to="/register">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
