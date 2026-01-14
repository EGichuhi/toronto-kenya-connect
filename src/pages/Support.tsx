import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Phone, MessageCircle, HelpCircle, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const faqs = [
  {
    question: "How do I join Nyumbani?",
    answer: "Click 'Join Free' and complete our registration form. You'll need to be 45 years or older and provide a valid email for verification. Once verified, you'll have access to browse events and connect with other members."
  },
  {
    question: "Is membership really free?",
    answer: "Yes! Creating a profile and browsing events is completely free. Individual events have their own pricing to cover venue, catering, and activities. Event fees typically range from $35-$85."
  },
  {
    question: "How do I pay for events?",
    answer: "We accept payments via PayPal for all event reservations. When you RSVP, you'll be redirected to PayPal to complete your secure payment. You'll receive a confirmation email with your receipt and event details."
  },
  {
    question: "What if I need to cancel?",
    answer: "Cancellations made more than 48 hours before an event are eligible for a full refund. Cancellations within 48 hours may receive credit toward future events at our discretion. Contact us for assistance."
  },
  {
    question: "Is this only for Kenyans?",
    answer: "Our community is centered around Kenyan culture, but we welcome anyone of African heritage or those who appreciate and connect with Kenyan culture. What matters most is shared values and genuine connection."
  },
  {
    question: "How are members verified?",
    answer: "All members must verify their email and phone number. We review profiles for authenticity and may request additional verification for premium events. Our goal is a safe, genuine community."
  },
  {
    question: "What happens at your events?",
    answer: "Our events are designed for comfortable mingling—think elegant dinners, speed dating, dance nights, and cultural celebrations. Each event includes structured activities to help break the ice, plus plenty of free time for natural conversation."
  },
  {
    question: "How do I connect with someone after an event?",
    answer: "After events, you can message people you met through our secure platform. If there's mutual interest, you can exchange contact information directly. We also facilitate 'match suggestions' based on event interactions."
  },
];

const Support = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Message sent! We'll respond within 24-48 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Help & Support
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                We're Here to Help
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Questions about events, membership, or meeting someone special? 
                Find answers below or reach out directly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-3 gap-6">
              <Card variant="gradient" className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Send us a message anytime
                  </p>
                  <a href="mailto:hello@nyumbani.ca" className="text-primary font-medium hover:underline">
                    hello@nyumbani.ca
                  </a>
                </CardContent>
              </Card>

              <Card variant="gradient" className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Mon-Fri, 9am-5pm EST
                  </p>
                  <a href="tel:+14165551234" className="text-primary font-medium hover:underline">
                    +1 (416) 555-1234
                  </a>
                </CardContent>
              </Card>

              <Card variant="gradient" className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">Safety</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Report concerns
                  </p>
                  <Button variant="outline" size="sm">
                    Safety Tips
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Quick answers to common questions about our community and events.
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-card border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card variant="elevated">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Can't find what you're looking for? We're here to help.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        placeholder="Tell us how we can help..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
