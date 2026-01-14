import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    password: "",
    interests: [] as string[],
    agreeTerms: false,
  });

  const culturalInterests = [
    "Traditional Music",
    "Cooking & Cuisine",
    "Storytelling",
    "Dance",
    "Arts & Crafts",
    "Language Preservation",
    "Community Service",
    "Networking",
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const age = parseInt(formData.age);
    if (isNaN(age) || age < 45) {
      toast.error("You must be 45 years or older to join our community.");
      return;
    }

    if (!formData.agreeTerms) {
      toast.error("Please agree to the terms and conditions.");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success("Karibu! Your account has been created. Please check your email to verify.");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Join Our Community
              </span>
              <h1 className="font-display text-4xl font-bold text-foreground mt-3 mb-4">
                Create Your Account
              </h1>
              <p className="text-muted-foreground">
                Become part of Toronto's vibrant Kenyan community. 
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Registration Form</CardTitle>
                <CardDescription>
                  Fill in your details below. All fields marked with * are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Phone and Age */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        placeholder="+1 (416) 555-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        min="45"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        required
                        placeholder="Must be 45+"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="password">Password *</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                        placeholder="Create a strong password"
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Cultural Interests */}
                  <div className="space-y-3">
                    <Label>Cultural Interests</Label>
                    <p className="text-xs text-muted-foreground">
                      Select the activities you're interested in (optional)
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {culturalInterests.map((interest) => (
                        <label
                          key={interest}
                          className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-colors"
                        >
                          <Checkbox
                            checked={formData.interests.includes(interest)}
                            onCheckedChange={() => handleInterestToggle(interest)}
                          />
                          <span className="text-sm">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, agreeTerms: checked as boolean })
                      }
                    />
                    <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                      . I confirm that I am 45 years of age or older.
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
