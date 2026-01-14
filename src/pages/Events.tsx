import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, Filter, Heart } from "lucide-react";
import { useState } from "react";
import dinnerImage from "@/assets/dinner-gathering.jpg";
import cuisineImage from "@/assets/kenyan-cuisine.jpg";
import cultureImage from "@/assets/cultural-dance.jpg";

const allEvents = [
  {
    id: 1,
    title: "Singles Wine & Dine Evening",
    date: "February 15, 2026",
    time: "7:00 PM - 10:00 PM",
    location: "The Kenyan Kitchen, Scarborough",
    description: "An intimate dinner mixer for singles. Enjoy nyama choma while meeting interesting people in a relaxed, elegant setting.",
    image: dinnerImage,
    spots: 8,
    price: 55,
    category: "mixer",
  },
  {
    id: 2,
    title: "Speed Dating & Chai",
    date: "February 28, 2026",
    time: "3:00 PM - 6:00 PM",
    location: "Community Centre, North York",
    description: "A fun afternoon of speed dating over chai and mandazi. Meet up to 15 potential matches in a structured, comfortable format.",
    image: cuisineImage,
    spots: 12,
    price: 35,
    category: "speed-dating",
  },
  {
    id: 3,
    title: "Valentine's Gala Night",
    date: "February 14, 2026",
    time: "6:00 PM - 11:00 PM",
    location: "African Palace, Etobicoke",
    description: "Our signature Valentine's event with live music, dancing, and a gourmet dinner. Come single, leave with connections.",
    image: cultureImage,
    spots: 6,
    price: 85,
    category: "gala",
  },
  {
    id: 4,
    title: "Salsa & Afrobeats Dance Night",
    date: "March 7, 2026",
    time: "8:00 PM - 11:00 PM",
    location: "Dance Studio, Downtown Toronto",
    description: "Learn to dance while meeting new people. No partner needed—that's the point! Includes refreshments.",
    image: cultureImage,
    spots: 15,
    price: 40,
    category: "social",
  },
  {
    id: 5,
    title: "Brunch & Mingle",
    date: "March 15, 2026",
    time: "11:00 AM - 2:00 PM",
    location: "Riverside Event Hall, Mississauga",
    description: "A relaxed Sunday brunch mixer with live acoustic music. Perfect for meaningful daytime conversations.",
    image: cuisineImage,
    spots: 20,
    price: 45,
    category: "mixer",
  },
  {
    id: 6,
    title: "Cooking Class for Singles",
    date: "March 22, 2026",
    time: "4:00 PM - 7:00 PM",
    location: "Culinary Studio, North York",
    description: "Learn to make pilau together! Pair up to cook, then enjoy the meal you created. Great icebreaker activity.",
    image: dinnerImage,
    spots: 10,
    price: 50,
    category: "social",
  },
];

const categories = [
  { value: "all", label: "All Events" },
  { value: "mixer", label: "Dinner Mixers" },
  { value: "speed-dating", label: "Speed Dating" },
  { value: "gala", label: "Galas" },
  { value: "social", label: "Social Activities" },
];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredEvents = activeCategory === "all" 
    ? allEvents 
    : allEvents.filter(event => event.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Singles Events
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Meet Your Match
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our carefully curated events bring together like-minded Kenyan singles 
                in elegant, comfortable settings designed for genuine connections.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="w-4 h-4" />
                <span>Filter:</span>
              </div>
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={activeCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.value)}
                  className="shrink-0"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <Card key={event.id} variant="elevated" className="overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      ${event.price}
                    </div>
                    <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {event.category === "mixer" && "Dinner Mixer"}
                      {event.category === "speed-dating" && "Speed Dating"}
                      {event.category === "gala" && "Gala Event"}
                      {event.category === "social" && "Social"}
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.date}
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-secondary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-secondary" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-accent font-medium">
                      <Users className="w-4 h-4" />
                      Only {event.spots} spots left
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button className="w-full">Reserve My Spot</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No events found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
