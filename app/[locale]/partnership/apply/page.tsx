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
  Building2,
  Mail,
  Phone,
  User,
  Globe,
  FileText,
  Send,
  CheckCircle2,
  Handshake,
  Sparkles,
  DollarSign,
  Calendar,
  Target,
  Briefcase,
} from 'lucide-react';

export default function PartnershipApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <BackgroundPattern variant="grid" opacity={0.05} className="text-gray-400" />

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#116366]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-[350px] h-[350px] bg-green-500/10 rounded-full blur-3xl"></div>
          </div>

          <Container className="relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl animate-bounce">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Application Submitted Successfully!
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
                Thank you for your interest in partnering with Autobot. Our team will review your
                application and get back to you within <span className="font-semibold text-[#116366]">2-3 business days</span>.
              </p>

              <div className="bg-gradient-to-br from-[#116366]/5 to-[#14b8a6]/5 border border-[#116366]/20 rounded-2xl p-8 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">What's Next?</h2>
                <div className="space-y-4 text-left">
                  {[
                    { icon: CheckCircle2, text: 'Application review (2-3 business days)' },
                    { icon: Phone, text: 'Initial discovery call scheduled' },
                    { icon: FileText, text: 'Partnership agreement drafting' },
                    { icon: Handshake, text: 'Official partnership kickoff!' },
                  ].map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center flex-shrink-0 shadow-md">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700">{step.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/partnership">
                  <Button variant="outline" className="border-2 border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white px-8 h-12">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back to Partnership
                  </Button>
                </Link>
                <Link href="/">
                  <Button className="bg-gradient-to-r from-[#116366] to-[#14b8a6] hover:from-[#0d4d50] hover:to-[#116366] text-white px-8 h-12 shadow-lg">
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
      <section className="relative min-h-[450px] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <BackgroundPattern variant="dots" opacity={0.05} className="text-gray-400" />

        {/* Decorative orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#116366]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-[350px] h-[350px] bg-[#14b8a6]/10 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/partnership"
              className="inline-flex items-center text-[#116366] hover:text-[#0d4d50] mb-6 font-medium transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Partnership
            </Link>

            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-[#116366]/10 to-[#14b8a6]/10 border border-[#116366]/20 rounded-full">
              <Handshake className="w-4 h-4 text-[#116366]" />
              <span className="text-[#116366] font-semibold text-sm">Partnership Application</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#116366] to-[#14b8a6]">Successful Partnership</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Fill out the form below to start your partnership journey with Autobot. We're excited
              to explore collaboration opportunities with you.
            </p>
          </div>
        </Container>
      </section>

      {/* Application Form */}
      <Section className="bg-white border-t border-gray-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information */}
              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-[#116366]/5 to-[#14b8a6]/5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center shadow-md">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">Company Information</CardTitle>
                      <CardDescription className="text-gray-600">
                        Tell us about your company
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-gray-700 font-medium flex items-center">
                      <Building2 className="w-4 h-4 mr-2 text-[#116366]" />
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      placeholder="PT. Your Company Name"
                      required
                      className="h-11 border-gray-300 focus:border-[#116366] focus:ring-[#116366]"
                    />
                  </div>

                  {/* Contact Person */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactName" className="text-gray-700 font-medium flex items-center">
                        <User className="w-4 h-4 mr-2 text-[#116366]" />
                        Contact Person *
                      </Label>
                      <Input
                        id="contactName"
                        placeholder="John Doe"
                        required
                        className="h-11 border-gray-300 focus:border-[#116366] focus:ring-[#116366]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position" className="text-gray-700 font-medium flex items-center">
                        <Briefcase className="w-4 h-4 mr-2 text-[#116366]" />
                        Position
                      </Label>
                      <Input
                        id="position"
                        placeholder="CEO / Director / Manager"
                        className="h-11 border-gray-300 focus:border-[#116366] focus:ring-[#116366]"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-[#116366]" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="contact@company.com"
                        required
                        className="h-11 border-gray-300 focus:border-[#116366] focus:ring-[#116366]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-medium flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-[#116366]" />
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+62 812 3456 7890"
                        required
                        className="h-11 border-gray-300 focus:border-[#116366] focus:ring-[#116366]"
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-gray-700 font-medium flex items-center">
                      <Globe className="w-4 h-4 mr-2 text-[#116366]" />
                      Company Website
                    </Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://www.yourcompany.com"
                      className="h-11 border-gray-300 focus:border-[#116366] focus:ring-[#116366]"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Partnership Details */}
              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-[#14b8a6]/5 to-[#116366]/5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#14b8a6] to-[#116366] flex items-center justify-center shadow-md">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">Partnership Details</CardTitle>
                      <CardDescription className="text-gray-600">
                        Share your partnership vision
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  {/* Partnership Type */}
                  <div className="space-y-2">
                    <Label htmlFor="partnershipType" className="text-gray-700 font-medium flex items-center">
                      <Handshake className="w-4 h-4 mr-2 text-[#116366]" />
                      Partnership Type of Interest *
                    </Label>
                    <select
                      id="partnershipType"
                      required
                      className="w-full h-11 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[3px] focus:ring-[#116366]/50 focus:border-[#116366] transition-all"
                    >
                      <option value="">Select partnership type</option>
                      <option value="co-development">Co-Development Partnership</option>
                      <option value="revenue-sharing">Revenue Sharing</option>
                      <option value="equity">Equity Partnership</option>
                      <option value="reseller">Reseller / Distributor</option>
                      <option value="referral">Referral Partner</option>
                      <option value="technology">Technology Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-gray-700 font-medium flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-[#116366]" />
                      Partnership Proposal / Project Description *
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your partnership idea, project scope, target market, expected outcomes, and how you envision working together..."
                      required
                      rows={8}
                      className="border-gray-300 focus:border-[#116366] focus:ring-[#116366] resize-none"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Budget */}
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-gray-700 font-medium flex items-center">
                        <DollarSign className="w-4 h-4 mr-2 text-[#116366]" />
                        Estimated Budget Range
                      </Label>
                      <select
                        id="budget"
                        className="w-full h-11 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[3px] focus:ring-[#116366]/50 focus:border-[#116366] transition-all"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50m">Under Rp 50 Million</option>
                        <option value="50-100m">Rp 50-100 Million</option>
                        <option value="100-500m">Rp 100-500 Million</option>
                        <option value="500m-1b">Rp 500M - 1 Billion</option>
                        <option value="over-1b">Over Rp 1 Billion</option>
                        <option value="equity">Equity-based / Revenue Share</option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="text-gray-700 font-medium flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-[#116366]" />
                        Expected Timeline
                      </Label>
                      <select
                        id="timeline"
                        className="w-full h-11 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[3px] focus:ring-[#116366]/50 focus:border-[#116366] transition-all"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP / Urgent</option>
                        <option value="1-3months">1-3 Months</option>
                        <option value="3-6months">3-6 Months</option>
                        <option value="6-12months">6-12 Months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-2">
                    <Label htmlFor="additional" className="text-gray-700 font-medium flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-[#116366]" />
                      Additional Information
                    </Label>
                    <Textarea
                      id="additional"
                      placeholder="Any other information you'd like to share (e.g., previous partnerships, relevant experience, specific requirements)..."
                      rows={5}
                      className="border-gray-300 focus:border-[#116366] focus:ring-[#116366] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#116366] to-[#14b8a6] hover:from-[#0d4d50] hover:to-[#116366] text-white shadow-lg hover:shadow-xl transition-all h-12 text-base font-semibold"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Submit Partnership Application
                    </Button>
                    <p className="text-sm text-gray-500 mt-4 text-center leading-relaxed">
                      By submitting this form, you agree to our{' '}
                      <Link href="/legal/terms-of-service" className="text-[#116366] hover:underline">
                        terms and conditions
                      </Link>{' '}
                      and{' '}
                      <Link href="/legal/privacy-policy" className="text-[#116366] hover:underline">
                        privacy policy
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </form>

            {/* What Happens Next */}
            <Card className="mt-8 border-2 border-[#116366]/30 bg-gradient-to-br from-[#116366]/5 via-white to-[#14b8a6]/5 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  What Happens Next?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {[
                    {
                      title: 'Application Review',
                      description: 'Our partnership team will review your application within 2-3 business days',
                      icon: FileText,
                    },
                    {
                      title: 'Discovery Call',
                      description: "We'll schedule an initial call to discuss your proposal in detail",
                      icon: Phone,
                    },
                    {
                      title: 'Agreement Drafting',
                      description: "If aligned, we'll draft a partnership agreement and kick-off plan",
                      icon: Handshake,
                    },
                    {
                      title: 'Partnership Launch',
                      description: 'Official partnership kickoff and collaboration begins!',
                      icon: Sparkles,
                    },
                  ].map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <li key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center shadow-md">
                            <span className="text-white font-bold text-lg">{index + 1}</span>
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                            <Icon className="w-4 h-4 text-[#116366]" />
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
