import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import Link from 'next/link';
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  Mail,
  FileText,
} from 'lucide-react';

export default function PrivacyPolicyPage() {
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
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Privacy Policy
                </h1>
                <p className="text-gray-600 mt-2">Last updated: January 17, 2025</p>
              </div>
            </div>

            <p className="text-lg text-gray-600">
              At Autobot, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-gray max-w-none">

              {/* Introduction */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Introduction</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  CV Autobot Wijaya Solution ("we", "our", or "us") operates the Autobot website and provides IT consulting services.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                  or use our services.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
                  please do not access the site or use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Information We Collect</h2>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Data</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may collect personally identifiable information that you voluntarily provide to us when you:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Register on the website or submit a contact form</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Apply for a job or partnership opportunity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Request information about our services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Subscribe to our newsletter or marketing communications</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  This information may include: name, email address, phone number, company name, job title,
                  and any other information you choose to provide.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>IP address, browser type, and operating system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Pages visited, time spent on pages, and navigation paths</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Referring website addresses and exit pages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Device identifiers and geolocation data</span>
                  </li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">How We Use Your Information</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>To provide, operate, and maintain our website and services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>To respond to your inquiries and provide customer support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>To process applications for employment or partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>To send you marketing and promotional communications (with your consent)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>To improve our website and services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>To detect, prevent, and address technical issues or fraudulent activity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>To comply with legal obligations and protect our legal rights</span>
                  </li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Data Security</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Encryption of data in transit and at rest</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Regular security assessments and updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Restricted access to personal data on a need-to-know basis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Employee training on data protection and privacy</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
                  While we strive to use commercially acceptable means to protect your personal information,
                  we cannot guarantee its absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Your Rights</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Access:</strong> Request a copy of the personal data we hold about you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Correction:</strong> Request correction of inaccurate or incomplete data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Deletion:</strong> Request deletion of your personal data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Objection:</strong> Object to our processing of your personal data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Portability:</strong> Request transfer of your data to another service provider</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Withdraw Consent:</strong> Withdraw your consent for data processing at any time</span>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Contact Us</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights,
                  please contact us at:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-900 font-semibold mb-2">CV Autobot Wijaya Solution</p>
                  <p className="text-gray-600">Email: privacy@autobot.co.id</p>
                  <p className="text-gray-600">Phone: +62 812 3456 7890</p>
                  <p className="text-gray-600">NIB: 1307240020719</p>
                </div>
              </div>

              {/* Updates to Policy */}
              <div className="bg-gradient-to-br from-[#116366]/5 to-[#14b8a6]/5 border border-[#116366]/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Updates to This Policy</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                  the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review
                  this Privacy Policy periodically for any changes.
                </p>
              </div>

            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
