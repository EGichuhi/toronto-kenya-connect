import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import dinnerImage from "@/assets/dinner-gathering.jpg";
import cuisineImage from "@/assets/kenyan-cuisine.jpg";

const upcomingEvents = [
  {
    id: 1,
    title: "Singles Wine & Dine Evening",
    date: "January 30, 2026",
    time: "7:00 PM - 10:00 PM",
    location: "TBD",
    description: "An intimate dinner mixer for singles. Enjoy nyama choma while meeting interesting people in a relaxed, elegant setting.",
    image: dinnerImage,
    spots: 8,
    price: 55,
    type: "mixer",
  },
  {
    id: 2,
    title: "Speed Dating & Chai",
    date: "February 7, 2026",
    time: "3:00 PM - 6:00 PM",
    location: "TBD",
    description: "A fun afternoon of speed dating over chai and mandazi. Meet up to 15 potential matches in a structured, comfortable format.",
    image: cuisineImage,
    spots: 12,
    price: 35,
    type: "speed-dating",
  },
  {
    id: 3,
    title: "Valentine's Gala Night",
    date: "February 14, 2026",
    time: "6:00 PM - 11:00 PM",
    location: "African Palace, Etobicoke",
    description: "Our signature Valentine's event with live music, dancing, and a gourmet dinner. Come single, leave with connections.",
    image: dinnerImage,
    spots: 6,
    price: 85,
    type: "gala",
  },
];

export function EventsSection() {
  return (
    <section className="py-24 bg-background pattern-kente">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Meet & Mingle
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Upcoming Mixer Events
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our curated events bring together mature, like-minded Kenyans in 
            sophisticated settings designed for genuine connections.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <Card 
              key={event.id} 
              variant="elevated"
              className="overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
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
                  {event.type === "mixer" && "Dinner Mixer"}
                  {event.type === "speed-dating" && "Speed Dating"}
                  {event.type === "gala" && "Gala Event"}
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
                <Button className="w-full" asChild>
                  <Link to={`/events/${event.id}`}>Reserve My Spot</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
