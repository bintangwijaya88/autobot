import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import Link from 'next/link';
import {
  ArrowLeft,
  Scale,
  FileCheck,
  AlertCircle,
  CheckCircle,
  XCircle,
  Gavel,
} from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <BackgroundPattern variant="grid" opacity={0.08} className="text-gray-400" />

        <Container className="relative z-10">
          <div className="max-w-4xl">
            <Link
              href="/"
              className="inline-flex items-center text-[#116366] hover:text-[#0d4d50] mb-6 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Terms of Service
                </h1>
                <p className="text-gray-600 mt-2">Last updated: January 17, 2025</p>
              </div>
            </div>

            <p className="text-lg text-gray-600">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-gray max-w-none">

              {/* Agreement */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Agreement to Terms</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and
                  CV Autobot Wijaya Solution ("Company", "we", "us", or "our") concerning your access to and use
                  of our website and services.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using our services, you agree to be bound by these Terms. If you do not agree
                  with these Terms, you must not access or use our services.
                </p>
              </div>

              {/* Services Provided */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Services Provided</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Autobot provides the following services:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Custom software development and IT consulting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>AI/LLM implementation and integration services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Industry-specific software solutions (Healthcare, Education, Retail, Corporate)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>IT manpower and talent placement services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Cloud solutions and cybersecurity services</span>
                  </li>
                </ul>
              </div>

              {/* User Obligations */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">User Obligations</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  By using our services, you agree to:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Provide accurate, current, and complete information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Maintain the confidentiality of your account credentials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Use our services only for lawful purposes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Not attempt to gain unauthorized access to our systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Respect all intellectual property rights</span>
                  </li>
                </ul>
              </div>

              {/* Prohibited Activities */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Prohibited Activities</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  You may not use our services to:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Violate any applicable laws or regulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Infringe on intellectual property rights of others</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Transmit harmful code, viruses, or malware</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Harass, abuse, or harm other users</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Engage in fraudulent or deceptive practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Reverse engineer or attempt to extract source code</span>
                  </li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <Gavel className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Intellectual Property Rights</h2>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Our Property</h3>
                <p className="text-gray-600 leading-relaxed">
                  All content, features, and functionality on our website and in our services, including but not limited to:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Text, graphics, logos, icons, images, audio clips, video clips</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Software code, algorithms, and technical documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Trademarks, service marks, and trade names</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  are owned by or licensed to CV Autobot Wijaya Solution and are protected by Indonesian and international
                  copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Custom Development Projects</h3>
                <p className="text-gray-600 leading-relaxed">
                  For custom software development projects, intellectual property rights will be defined in separate
                  project agreements. Typically:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Client owns the final custom-built application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Autobot retains rights to reusable components and frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Third-party components remain subject to their respective licenses</span>
                  </li>
                </ul>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Payment Terms</h2>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Payment terms will be specified in individual project agreements or invoices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>All prices are in Indonesian Rupiah (IDR) unless otherwise stated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Late payments may incur additional fees as specified in agreements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>We reserve the right to suspend services for non-payment</span>
                  </li>
                </ul>
              </div>

              {/* Warranties and Disclaimers */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Warranties and Disclaimers</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We strive to provide high-quality services, but:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Services are provided "as is" and "as available"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>We do not guarantee uninterrupted or error-free service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Specific warranties for deliverables will be outlined in project agreements</span>
                  </li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Limitation of Liability</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To the maximum extent permitted by Indonesian law:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>We shall not be liable for indirect, incidental, or consequential damages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Our total liability shall not exceed the amount paid for the specific service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Liability limitations do not apply to cases of gross negligence or willful misconduct</span>
                  </li>
                </ul>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Termination</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We may terminate or suspend your access to our services immediately, without prior notice,
                  for any reason, including but not limited to:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Breach of these Terms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Non-payment for services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Fraudulent or illegal activity</span>
                  </li>
                </ul>
              </div>

              {/* Governing Law */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <Gavel className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Governing Law</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the Republic of Indonesia,
                  without regard to its conflict of law provisions. Any disputes arising from these Terms shall be
                  subject to the exclusive jurisdiction of the courts in Jakarta, Indonesia.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-br from-[#116366]/5 to-[#14b8a6]/5 border border-[#116366]/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Questions About These Terms?</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-900 font-semibold">CV Autobot Wijaya Solution</p>
                  <p className="text-gray-600">Email: legal@autobot.co.id</p>
                  <p className="text-gray-600">Phone: +62 812 3456 7890</p>
                  <p className="text-gray-600">NIB: 1307240020719</p>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
