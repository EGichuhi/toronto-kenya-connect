import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Utensils, BookOpen, Palette, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import cultureImage from "@/assets/cultural-dance.jpg";
import cuisineImage from "@/assets/kenyan-cuisine.jpg";

const activities = [
  {
    icon: Music,
    title: "Traditional Music & Dance",
    description: "Experience the rich rhythms of Benga, Taarab, and traditional folk songs from across Kenya's diverse communities. Our events feature live performances and opportunities to join in the dancing.",
    schedule: "Featured at all major events",
    image: cultureImage,
  },
  {
    icon: Utensils,
    title: "Cooking Demonstrations",
    description: "Master the art of Kenyan cuisine with hands-on cooking sessions led by experienced chefs from our community. Learn to prepare authentic dishes like pilau, samosas, and mandazi.",
    schedule: "Monthly workshops",
    image: cuisineImage,
  },
  {
    icon: BookOpen,
    title: "Storytelling Evenings",
    description: "Gather for tales of folklore, proverbs, and personal journeys that connect us to our heritage. Share your own story and preserve our oral traditions for future generations.",
    schedule: "Bi-weekly gatherings",
    image: cultureImage,
  },
  {
    icon: Palette,
    title: "Arts & Crafts",
    description: "Explore Kenyan artistry through beadwork, basket weaving, and kikoi fabric crafts. Our workshops allow you to create your own handmade pieces to take home.",
    schedule: "Monthly sessions",
    image: cuisineImage,
  },
];

const Culture = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={cultureImage}
              alt="Kenyan cultural dance"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl text-primary-foreground">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                Cultural Activities
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
                Celebrating Our Heritage
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Our events go beyond delicious food—they're immersive experiences 
                that celebrate Kenya's rich traditions, art, music, and storytelling.
              </p>
            </div>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {activities.map((activity, index) => (
                <Card key={index} variant="elevated" className="overflow-hidden group">
                  <div className="grid md:grid-cols-2">
                    <div className="h-48 md:h-auto overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <activity.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-2">{activity.title}</CardTitle>
                      <CardDescription className="mb-4 leading-relaxed">
                        {activity.description}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-sm text-secondary font-medium">
                        <Calendar className="w-4 h-4" />
                        {activity.schedule}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "47", label: "Kenyan Counties Represented" },
                { number: "50+", label: "Cultural Events Hosted" },
                { number: "500+", label: "Community Members" },
                { number: "12", label: "Traditional Dances Taught" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card variant="gradient" className="bg-foreground text-primary-foreground">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="font-display text-3xl font-bold mb-4">
                  Share Your Culture
                </h2>
                <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8 leading-relaxed">
                  Have a talent, recipe, or tradition you'd like to share? We're always 
                  looking for community members to lead workshops, perform, or contribute 
                  to our cultural programming.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="warm" size="lg" asChild>
                    <Link to="/support#contact">Get Involved</Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <Link to="/events">View Upcoming Events</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Culture;
