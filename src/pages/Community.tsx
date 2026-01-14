import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, ThumbsUp, Users, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const discussions = [
  {
    id: 1,
    title: "Best Kenyan restaurants in the GTA?",
    author: "Wanjiku M.",
    avatar: "WM",
    date: "2 hours ago",
    replies: 23,
    likes: 45,
    category: "Food & Dining",
    preview: "Looking for recommendations for authentic Kenyan food in Toronto. Craving some good nyama choma and pilau..."
  },
  {
    id: 2,
    title: "Anyone interested in a Kikuyu language group?",
    author: "Peter K.",
    avatar: "PK",
    date: "5 hours ago",
    replies: 18,
    likes: 32,
    category: "Language",
    preview: "I'm thinking of starting a weekly meetup to practice and preserve our mother tongue. Would anyone be interested?"
  },
  {
    id: 3,
    title: "Tips for newcomers from Kenya",
    author: "Grace O.",
    avatar: "GO",
    date: "1 day ago",
    replies: 56,
    likes: 89,
    category: "General",
    preview: "For those who recently moved to Toronto, here are some things I wish I knew when I first arrived..."
  },
  {
    id: 4,
    title: "Last month's Mashujaa Day celebration was amazing!",
    author: "Samuel N.",
    avatar: "SN",
    date: "2 days ago",
    replies: 34,
    likes: 67,
    category: "Events",
    preview: "Just wanted to thank the organizers for such a wonderful event. The food, music, and company were incredible..."
  },
  {
    id: 5,
    title: "Traditional recipes from your home county?",
    author: "Mary A.",
    avatar: "MA",
    date: "3 days ago",
    replies: 41,
    likes: 52,
    category: "Food & Dining",
    preview: "I'd love to collect recipes from different parts of Kenya. Share your family favorites!"
  },
];

const categories = [
  { name: "All Topics", count: 156 },
  { name: "General", count: 45 },
  { name: "Food & Dining", count: 38 },
  { name: "Events", count: 28 },
  { name: "Language", count: 22 },
  { name: "Business", count: 15 },
  { name: "Newcomers", count: 8 },
];

const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Topics");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Community Forum
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                  Connect & Share
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Join the conversation! Share experiences, ask questions, and connect 
                  with fellow Kenyans in Toronto.
                </p>
              </div>
              <Button size="lg" className="shrink-0" asChild>
                <Link to="/register">
                  <Plus className="w-4 h-4 mr-2" />
                  Start a Discussion
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category.name
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className={`text-xs ${
                          selectedCategory === category.name
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card variant="gradient" className="mt-6">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold">523 Members</p>
                        <p className="text-xs text-muted-foreground">Growing every day</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Join to start participating in discussions and connecting with the community.
                    </p>
                    <Button className="w-full mt-4" variant="accent" asChild>
                      <Link to="/register">Join Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Discussions */}
              <div className="lg:col-span-3 space-y-4">
                {discussions.map((discussion) => (
                  <Card key={discussion.id} variant="elevated" className="hover:shadow-warm transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <Avatar className="w-12 h-12 shrink-0">
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {discussion.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-secondary/20 text-secondary-foreground">
                              {discussion.category}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {discussion.date}
                            </span>
                          </div>
                          <h3 className="font-display text-lg font-semibold text-foreground mb-1 hover:text-primary cursor-pointer transition-colors">
                            {discussion.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {discussion.preview}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">{discussion.author}</span>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              {discussion.replies}
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-4 h-4" />
                              {discussion.likes}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Load More */}
                <div className="text-center pt-4">
                  <Button variant="outline">Load More Discussions</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
