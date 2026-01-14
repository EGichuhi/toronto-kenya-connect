import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Utensils, BookOpen, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import cultureImage from "@/assets/cultural-dance.jpg";

const activities = [
  {
    icon: Music,
    title: "Traditional Music & Dance",
    description: "Experience the rhythms of Kenya through live performances of Benga, Taarab, and traditional folk songs. Learn iconic dances from various tribes.",
  },
  {
    icon: Utensils,
    title: "Cooking Demonstrations",
    description: "Master the art of Kenyan cuisine with hands-on cooking sessions. Learn to make perfect ugali, pilau, and other beloved dishes.",
  },
  {
    icon: BookOpen,
    title: "Storytelling Evenings",
    description: "Gather around for tales of folklore, proverbs, and personal journeys. Share your own story and connect through narrative.",
  },
  {
    icon: Palette,
    title: "Arts & Crafts",
    description: "Explore Kenyan artistry through beadwork, basket weaving, and kikoi fabric crafts. Take home your own handmade creations.",
  },
];

export function CultureSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={cultureImage}
                alt="Traditional Kenyan dancers"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground font-display text-2xl font-semibold">
                  Preserving Our Heritage
                </p>
                <p className="text-primary-foreground/80 text-sm mt-2">
                  Every event features authentic cultural experiences
                </p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Cultural Activities
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Reconnect With Your Roots
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our dinners are more than just meals—they're immersive cultural 
                experiences that celebrate Kenya's rich heritage and bring our 
                traditions to life in Toronto.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <Card key={index} variant="flat" className="bg-background/50 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <activity.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs leading-relaxed">
                      {activity.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" asChild>
              <Link to="/culture">Explore All Activities</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
