import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Heart } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("You're on the list! We'll notify you of upcoming events.");
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Heart className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Don't Miss Out
          </h2>
          <p className="text-primary-foreground/80 mb-8 leading-relaxed">
            Be the first to know about upcoming mixer events, exclusive gatherings, 
            and community news. Your next connection could be one event away.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
              required
            />
            <Button 
              type="submit" 
              variant="secondary" 
              size="lg"
              disabled={isLoading}
              className="shrink-0"
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>

          <p className="text-xs text-primary-foreground/50 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
