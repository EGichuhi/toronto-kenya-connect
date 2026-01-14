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
import { Eye, EyeOff, Heart, Shield } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Clerk import
import { useSignUp } from "@clerk/clerk-react";

const interests = [
  "Dining & Fine Food",
  "Dancing & Music",
  "Travel & Adventure",
  "Cultural Events",
  "Quiet Evenings",
  "Outdoor Activities",
  "Arts & Theatre",
  "Faith & Spirituality",
];

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    lookingFor: "",
    password: "",
    interests: [] as string[],
    agreeTerms: false,
  });

  // Clerk hook
  const { isLoaded, signUp } = useSignUp();

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

    // Client-side validation (keep your existing checks)
    const age = parseInt(formData.age);
    if (isNaN(age) || age < 45) {
      toast.error("You must be 45 years or older to join our community.");
      return;
    }

    if (!formData.gender || !formData.lookingFor) {
      toast.error("Please select your gender and who you're looking for.");
      return;
    }

    if (!formData.agreeTerms) {
      toast.error("Please agree to the terms and conditions.");
      return;
    }

    if (!isLoaded) {
      toast.error("Authentication service not ready. Please try again.");
      return;
    }

    setIsLoading(true);

    try {
      // Create user with Clerk
      await signUp.create({
        emailAddress: formData.email.trim(),
        password: formData.password,
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        // Optional: add custom metadata if you want to store extra data
        // publicMetadata: {
        //   phone: formData.phone,
        //   age: age,
        //   gender: formData.gender,
        //   lookingFor: formData.lookingFor,
        //   interests: formData.interests,
        // }
      });

      // Success: Clerk may require email verification — show message
      toast.success("Karibu! Your account has been created. Check your email to verify.");
      
      // Optional: redirect to login after success
      // navigate("/login");
    } catch (err: any) {
      // Clerk error handling (nice messages)
      const errorMsg = err.errors?.[0]?.message || "Registration failed. Please try again.";
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                Begin Your Journey
              </h1>
              <p className="text-muted-foreground">
                Join Toronto's exclusive community for Kenyan singles 45+. 
                Already a member?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Create Your Profile</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" />
                  Your information is secure and private
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
                        placeholder="Your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        placeholder="Your last name"
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

                  {/* Gender */}
                  <div className="space-y-3">
                    <Label>I am a *</Label>
                    <RadioGroup
                      value={formData.gender}
                      onValueChange={(value) => setFormData({ ...formData, gender: value })}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="man" id="man" />
                        <Label htmlFor="man" className="font-normal cursor-pointer">Man</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="woman" id="woman" />
                        <Label htmlFor="woman" className="font-normal cursor-pointer">Woman</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Looking For */}
                  <div className="space-y-3">
                    <Label>Looking for *</Label>
                    <RadioGroup
                      value={formData.lookingFor}
                      onValueChange={(value) => setFormData({ ...formData, lookingFor: value })}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="man" id="looking-man" />
                        <Label htmlFor="looking-man" className="font-normal cursor-pointer">Men</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="woman" id="looking-woman" />
                        <Label htmlFor="looking-woman" className="font-normal cursor-pointer">Women</Label>
                      </div>
                    </RadioGroup>
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

                  {/* Interests */}
                  <div className="space-y-3">
                    <Label>Interests & Hobbies</Label>
                    <p className="text-xs text-muted-foreground">
                      Select what you enjoy (helps us match you better)
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {interests.map((interest) => (
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
                    {isLoading ? "Creating Profile..." : "Create My Profile"}
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