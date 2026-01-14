import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Heart,
    title: "Authentic Connections",
    description: "Meet fellow Kenyans who share your experiences, memories, and love for home.",
  },
  {
    icon: Users,
    title: "Age-Appropriate Community",
    description: "Designed specifically for mature members 45+, with events tailored to your interests.",
  },
  {
    icon: Shield,
    title: "Safe & Welcoming",
    description: "Moderated spaces ensuring respectful, meaningful interactions.",
  },
  {
    icon: MessageCircle,
    title: "Stay Connected",
    description: "Online forums and group chats to keep the conversation going between events.",
  },
];

export function CommunitySection() {
  return (
    <section className="py-24 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 pattern-kente" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Our Community
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            More Than Just Dinners
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed">
            Join a thriving community of Kenyan expatriates who support each other, 
            celebrate together, and keep our culture alive in Toronto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur-sm text-primary-foreground"
            >
              <CardContent className="pt-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-secondary" />
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

        <div className="text-center">
          <Button variant="warm" size="lg" asChild>
            <Link to="/community">Join the Community</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
