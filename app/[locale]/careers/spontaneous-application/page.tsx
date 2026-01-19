'use client';

import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowLeft,
  Mail,
  Phone,
  User,
  MapPin,
  Briefcase,
  GraduationCap,
  Upload,
  Send,
  CheckCircle2,
  Linkedin,
  Github,
} from 'lucide-react';

export default function SpontaneousApplicationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
          <BackgroundPattern variant="grid" opacity={0.08} className="text-gray-400" />
          <Container className="relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Application Received!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for your interest in joining Autobot! We've received your application and
                will review it carefully. If your profile matches our needs, we'll contact you within
                1-2 weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/careers">
                  <Button variant="outline" className="border-[#116366] text-[#116366]">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Careers
                  </Button>
                </Link>
                <Link href="/">
                  <Button className="bg-[#116366] hover:bg-[#0d4d50] text-white">
                    Go to Home
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <BackgroundPattern variant="grid" opacity={0.08} className="text-gray-400" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/careers"
              className="inline-flex items-center text-[#116366] hover:text-[#0d4d50] mb-6 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Spontaneous Application
            </h1>
            <p className="text-lg text-gray-600">
              Don't see a position that fits? Send us your CV anyway! We're always looking for
              talented individuals to join our team.
            </p>
          </div>
        </Container>
      </section>

      {/* Application Form */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit}>
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl">Personal Information</CardTitle>
                  <CardDescription>
                    Tell us about yourself and your professional background
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-[#116366]" />
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      required
                      className="border-gray-300"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-[#116366]" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="border-gray-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-[#116366]" />
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+62 812 3456 7890"
                        required
                        className="border-gray-300"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-[#116366]" />
                      Location / City *
                    </Label>
                    <Input
                      id="location"
                      placeholder="Jakarta, Indonesia"
                      required
                      className="border-gray-300"
                    />
                  </div>

                  {/* Position of Interest */}
                  <div className="space-y-2">
                    <Label htmlFor="position" className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-2 text-[#116366]" />
                      Position of Interest *
                    </Label>
                    <select
                      id="position"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#116366]"
                    >
                      <option value="">Select position category</option>
                      <option value="frontend">Frontend Developer</option>
                      <option value="backend">Backend Developer</option>
                      <option value="fullstack">Fullstack Developer</option>
                      <option value="mobile">Mobile Developer</option>
                      <option value="devops">DevOps Engineer</option>
                      <option value="ai-ml">AI/ML Engineer</option>
                      <option value="ui-ux">UI/UX Designer</option>
                      <option value="project-manager">Project Manager</option>
                      <option value="business-analyst">Business Analyst</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Experience Level */}
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2 text-[#116366]" />
                      Experience Level *
                    </Label>
                    <select
                      id="experience"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#116366]"
                    >
                      <option value="">Select experience level</option>
                      <option value="fresh-graduate">Fresh Graduate</option>
                      <option value="1-2years">1-2 Years</option>
                      <option value="3-5years">3-5 Years</option>
                      <option value="5-10years">5-10 Years</option>
                      <option value="10+years">10+ Years</option>
                    </select>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <Label htmlFor="skills">
                      Key Skills & Technologies *
                    </Label>
                    <Textarea
                      id="skills"
                      placeholder="e.g., React, Next.js, Node.js, Python, AI/ML, AWS, etc."
                      required
                      rows={3}
                      className="border-gray-300"
                    />
                  </div>

                  {/* LinkedIn & GitHub */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="linkedin" className="flex items-center">
                        <Linkedin className="w-4 h-4 mr-2 text-[#116366]" />
                        LinkedIn Profile
                      </Label>
                      <Input
                        id="linkedin"
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="border-gray-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="github" className="flex items-center">
                        <Github className="w-4 h-4 mr-2 text-[#116366]" />
                        GitHub Profile
                      </Label>
                      <Input
                        id="github"
                        type="url"
                        placeholder="https://github.com/yourusername"
                        className="border-gray-300"
                      />
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">
                      Cover Letter / Introduction *
                    </Label>
                    <Textarea
                      id="coverLetter"
                      placeholder="Tell us about yourself, your experience, and why you'd like to join Autobot..."
                      required
                      rows={6}
                      className="border-gray-300"
                    />
                  </div>

                  {/* CV Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="cv" className="flex items-center">
                      <Upload className="w-4 h-4 mr-2 text-[#116366]" />
                      Upload CV/Resume * (PDF, max 5MB)
                    </Label>
                    <Input
                      id="cv"
                      type="file"
                      accept=".pdf"
                      required
                      className="border-gray-300"
                    />
                  </div>

                  {/* Expected Salary */}
                  <div className="space-y-2">
                    <Label htmlFor="salary">Expected Salary Range (IDR per month)</Label>
                    <select
                      id="salary"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#116366]"
                    >
                      <option value="">Select salary range</option>
                      <option value="5-10m">Rp 5-10 Million</option>
                      <option value="10-15m">Rp 10-15 Million</option>
                      <option value="15-20m">Rp 15-20 Million</option>
                      <option value="20-30m">Rp 20-30 Million</option>
                      <option value="30m+">Rp 30 Million+</option>
                      <option value="negotiable">Negotiable</option>
                    </select>
                  </div>

                  {/* Availability */}
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability to Start</Label>
                    <select
                      id="availability"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#116366]"
                    >
                      <option value="">Select availability</option>
                      <option value="immediate">Immediate</option>
                      <option value="2weeks">2 Weeks Notice</option>
                      <option value="1month">1 Month Notice</option>
                      <option value="2months">2 Months Notice</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#116366] hover:bg-[#0d4d50] text-white"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Submit Application
                    </Button>
                    <p className="text-sm text-gray-500 mt-3 text-center">
                      By submitting, you agree to our privacy policy
                    </p>
                  </div>
                </CardContent>
              </Card>
            </form>

            {/* Additional Info */}
            <Card className="mt-8 border-[#116366]/20 bg-gradient-to-br from-[#116366]/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-lg">Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-[#116366] text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold">
                      1
                    </span>
                    <span>Your application will be reviewed by our HR team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-[#116366] text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold">
                      2
                    </span>
                    <span>If selected, you'll receive an email for initial screening</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-[#116366] text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold">
                      3
                    </span>
                    <span>Technical test and interview rounds will follow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-[#116366] text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold">
                      4
                    </span>
                    <span>Final decision and offer will be made within 2-4 weeks</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
