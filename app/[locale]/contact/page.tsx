'use client';

import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Building2, MessageSquare, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Prepare data for API (use service as subject)
      const contactData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        subject: formData.service || 'General Inquiry',
        message: formData.message,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (err) {
      console.error('Contact form error:', err);
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office Address',
      details: ['Jl. Gg. Bina Warga III No. 36', 'Kel. Lubang Buaya, Kec. Cipayung', 'Jakarta Timur, DKI Jakarta 13810'],
      color: 'from-[#116366] to-[#14b8a6]',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone / WhatsApp',
      details: ['+62 813-5000-0965'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['autobotwsolution@gmail.com'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Monday - Friday', '09.00 - 17.00 WIB'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'AI & LLM Solutions',
    'IoT Solutions',
    'Cloud Solutions',
    'Cybersecurity',
    'Corporate Setup',
    'Education Setup',
    'Healthcare SIMRS',
    'Retail & E-Commerce',
    'IT Consulting',
    'IT Manpower',
    'Other',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <BackgroundPattern variant="grid" opacity={0.05} className="text-gray-400" />

        {/* Decorative orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#116366]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-[350px] h-[350px] bg-[#14b8a6]/10 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-[#116366]/10 to-[#14b8a6]/10 border border-[#116366]/20 rounded-full">
              <Sparkles className="w-4 h-4 text-[#116366]" />
              <span className="text-[#116366] font-semibold text-sm">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#116366] to-[#14b8a6]">Amazing</span> Together
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? We'd love to hear from you. Our team is ready to turn your ideas into reality.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <Section className="bg-white border-t border-gray-100">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${info.color}`}></div>
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg text-gray-900">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                    <p className="text-sm text-gray-600">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Thank you for contacting us. Our team will review your message and get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="mt-2 h-11 border-gray-300 focus:border-[#116366] focus:ring-[#116366]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                          className="mt-2 h-11 border-gray-300 focus:border-[#116366] focus:ring-[#116366]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+62 812 3456 7890"
                          className="mt-2 h-11 border-gray-300 focus:border-[#116366] focus:ring-[#116366]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-gray-700 font-medium">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="mt-2 h-11 border-gray-300 focus:border-[#116366] focus:ring-[#116366]"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service" className="text-gray-700 font-medium">Service Interested In</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="mt-2 w-full h-11 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[3px] focus:ring-[#116366]/50 focus:border-[#116366] transition-all"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, requirements, budget, and timeline..."
                        required
                        rows={6}
                        className="mt-2 border-gray-300 focus:border-[#116366] focus:ring-[#116366] resize-none"
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                        <strong>Error:</strong> {error}
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-[#116366] to-[#14b8a6] hover:from-[#0d4d50] hover:to-[#116366] text-white shadow-lg hover:shadow-xl transition-all h-12 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Side Info - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Visit Our Office</h2>
              <p className="text-gray-600 mb-6">We'd love to meet you in person. Schedule a visit to our office for consultation.</p>

              {/* Enhanced Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-64 mb-6 flex items-center justify-center border border-gray-300 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#116366]/5 to-[#14b8a6]/5 group-hover:opacity-75 transition-opacity"></div>
                <div className="text-center relative z-10 px-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-700 font-semibold">Jakarta Office</p>
                  <p className="text-sm text-gray-500">Jl. Gg. Bina Warga III No. 36</p>
                  <p className="text-sm text-gray-500">Lubang Buaya, Jakarta Timur</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Card className="border-2 border-[#116366]/30 bg-gradient-to-br from-[#116366]/5 to-white hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center flex-shrink-0 shadow-md">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">Need Urgent Support?</h3>
                        <p className="text-sm text-gray-600 mb-4">Our team is available 24/7 for critical issues and consultations.</p>
                        <Button className="w-full bg-[#116366] hover:bg-[#0d4d50] text-white shadow-md">
                          Contact Support
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#14b8a6]/30 bg-gradient-to-br from-[#14b8a6]/5 to-white hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#14b8a6] to-[#116366] flex items-center justify-center flex-shrink-0 shadow-md">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">Join Our Team</h3>
                        <p className="text-sm text-gray-600 mb-4">Explore exciting career opportunities with Autobot.</p>
                        <Button className="w-full bg-[#14b8a6] hover:bg-[#116366] text-white shadow-md">
                          View Careers
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <SectionHeader
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about our services."
            centered
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'What is the typical project timeline?',
                answer: 'Project timelines vary based on scope and complexity. Small projects may take 4-8 weeks, while larger enterprise solutions can take 3-6 months or more. We provide detailed timelines during consultation.',
              },
              {
                question: 'Do you offer maintenance and support?',
                answer: 'Yes, we offer comprehensive maintenance and support packages with SLA-backed service levels, including 24/7 support for critical systems. All our solutions include warranty and post-launch support.',
              },
              {
                question: 'What industries do you serve?',
                answer: 'We serve 12+ industries including healthcare, education, retail, finance, manufacturing, and more. Our team has delivered 150+ projects across diverse sectors with proven expertise.',
              },
              {
                question: 'Can you work with existing systems?',
                answer: 'Absolutely! We specialize in integrating with existing systems, modernizing legacy applications, and ensuring seamless data migration without disrupting your operations.',
              },
              {
                question: 'What are your payment terms?',
                answer: 'We offer flexible payment terms based on project milestones. Typically 30% upfront, 40% during development, and 30% upon completion. Custom payment plans available for enterprise clients.',
              },
            ].map((faq, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all hover:scale-[1.01] bg-white">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed pl-11">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
