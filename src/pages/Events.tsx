import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, Filter } from "lucide-react";
import { useState } from "react";
import dinnerImage from "@/assets/dinner-gathering.jpg";
import cuisineImage from "@/assets/kenyan-cuisine.jpg";
import cultureImage from "@/assets/cultural-dance.jpg";

const allEvents = [
  {
    id: 1,
    title: "Nyama Choma Night",
    date: "February 15, 2026",
    time: "6:00 PM - 10:00 PM",
    location: "The Kenyan Kitchen, Scarborough",
    description: "Join us for an evening of authentic grilled meats, ugali, and sukuma wiki. Live music and storytelling included.",
    image: dinnerImage,
    spots: 12,
    price: 45,
    category: "dinner",
  },
  {
    id: 2,
    title: "Chapati & Chai Social",
    date: "February 28, 2026",
    time: "3:00 PM - 6:00 PM",
    location: "Community Centre, North York",
    description: "A cozy afternoon of chai, fresh chapatis, and connecting with fellow Kenyans. Perfect for newcomers!",
    image: cuisineImage,
    spots: 20,
    price: 25,
    category: "social",
  },
  {
    id: 3,
    title: "Mashujaa Day Celebration",
    date: "March 14, 2026",
    time: "5:00 PM - 11:00 PM",
    location: "African Palace, Etobicoke",
    description: "Celebrate our heroes with traditional dances, poetry, and a feast featuring dishes from all 47 counties.",
    image: cultureImage,
    spots: 8,
    price: 65,
    category: "cultural",
  },
  {
    id: 4,
    title: "Kikuyu Language Evening",
    date: "March 21, 2026",
    time: "6:00 PM - 8:30 PM",
    location: "Community Centre, North York",
    description: "Practice and preserve our mother tongue. Open to all skill levels - from fluent speakers to beginners.",
    image: dinnerImage,
    spots: 15,
    price: 15,
    category: "cultural",
  },
  {
    id: 5,
    title: "Easter Mandazi Brunch",
    date: "April 5, 2026",
    time: "11:00 AM - 2:00 PM",
    location: "Riverside Event Hall, Mississauga",
    description: "Celebrate Easter with a delicious brunch featuring mandazi, samosas, and traditional dishes.",
    image: cuisineImage,
    spots: 30,
    price: 35,
    category: "dinner",
  },
  {
    id: 6,
    title: "Beadwork Workshop",
    date: "April 12, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Craft Studio, Downtown Toronto",
    description: "Learn the intricate art of Maasai beadwork. Create your own jewelry to take home.",
    image: cultureImage,
    spots: 10,
    price: 40,
    category: "cultural",
  },
];

const categories = [
  { value: "all", label: "All Events" },
  { value: "dinner", label: "Dinners" },
  { value: "social", label: "Social" },
  { value: "cultural", label: "Cultural" },
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
                Events & Gatherings
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Upcoming Events
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Browse our calendar of cultural celebrations, delicious dinners, 
                and community gatherings. Reserve your spot today!
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
                    <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium capitalize">
                      {event.category}
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
                      {event.spots} spots remaining
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button className="w-full">RSVP Now</Button>
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
