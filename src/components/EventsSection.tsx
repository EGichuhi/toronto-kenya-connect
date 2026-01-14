import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import dinnerImage from "@/assets/dinner-gathering.jpg";
import cuisineImage from "@/assets/kenyan-cuisine.jpg";

const upcomingEvents = [
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
  },
  {
    id: 3,
    title: "Mashujaa Day Celebration",
    date: "March 14, 2026",
    time: "5:00 PM - 11:00 PM",
    location: "African Palace, Etobicoke",
    description: "Celebrate our heroes with traditional dances, poetry, and a feast featuring dishes from all 47 counties.",
    image: dinnerImage,
    spots: 8,
    price: 65,
  },
];

export function EventsSection() {
  return (
    <section className="py-24 bg-background pattern-kente">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Upcoming Gatherings
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Join Our Next Dinner
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Experience the warmth of Kenyan hospitality at our carefully curated 
            events. From traditional feasts to casual chai sessions.
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
                <Button className="w-full" asChild>
                  <Link to={`/events/${event.id}`}>RSVP Now</Link>
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
