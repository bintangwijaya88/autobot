import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import Link from 'next/link';
import {
  ArrowLeft,
  Cookie,
  Settings,
  Eye,
  BarChart,
  Shield,
  Info,
} from 'lucide-react';

export default function CookiePolicyPage() {
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
                <Cookie className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Cookie Policy
                </h1>
                <p className="text-gray-600 mt-2">Last updated: January 17, 2025</p>
              </div>
            </div>

            <p className="text-lg text-gray-600">
              This Cookie Policy explains how Autobot uses cookies and similar technologies on our website.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-gray max-w-none">

              {/* What Are Cookies */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <Info className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">What Are Cookies?</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                  They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you
                  go offline, while session cookies are deleted as soon as you close your web browser.
                </p>
              </div>

              {/* How We Use Cookies */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">How We Use Cookies</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We use cookies for the following purposes:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Essential cookies:</strong> Required for the website to function properly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Performance cookies:</strong> Help us understand how visitors interact with our website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Functionality cookies:</strong> Remember your preferences and settings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Marketing cookies:</strong> Track your online activity to deliver relevant advertisements</span>
                  </li>
                </ul>
              </div>

              {/* Types of Cookies We Use */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Types of Cookies We Use</h2>
                </div>

                {/* Essential Cookies */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Shield className="w-5 h-5 text-[#116366] mr-2" />
                    Essential Cookies
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    These cookies are necessary for the website to function and cannot be disabled in our systems.
                    They are usually only set in response to actions made by you such as setting your privacy preferences,
                    logging in, or filling in forms.
                  </p>
                  <div className="bg-white rounded p-3 border border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Examples:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-[#14b8a6] mr-2">•</span>
                        <span>Session management and authentication</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#14b8a6] mr-2">•</span>
                        <span>Security and fraud prevention</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#14b8a6] mr-2">•</span>
                        <span>Language preference</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <BarChart className="w-5 h-5 text-[#116366] mr-2" />
                    Analytics Cookies
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the
                    performance of our site. They help us know which pages are the most and least popular and
                    see how visitors move around the site.
                  </p>
                  <div className="bg-white rounded p-3 border border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Examples:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-[#14b8a6] mr-2">•</span>
                        <span>Google Analytics (tracks page views, sessions, bounce rate)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#14b8a6] mr-2">•</span>
                        <span>Visitor statistics and behavior analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#14b8a6] mr-2">•</span>
                        <span>Performance monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Functionality Cookies */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Settings className="w-5 h-5 text-[#116366] mr-2" />
                    Functionality Cookies
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    These cookies enable the website to provide enhanced functionality and personalization.
                    They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                  <div className="bg-white rounded p-3 border border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Examples:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-[#14b8a6] mr-2">•</span>
                        <span>Remember language selection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#14b8a6] mr-2">•</span>
                        <span>Store user preferences</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#14b8a6] mr-2">•</span>
                        <span>Chatbot and live chat functionality</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Eye className="w-5 h-5 text-[#116366] mr-2" />
                    Marketing Cookies
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    These cookies may be set through our site by our advertising partners. They may be used by those
                    companies to build a profile of your interests and show you relevant advertisements on other sites.
                  </p>
                  <div className="bg-white rounded p-3 border border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Examples:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-[#14b8a6] mr-2">•</span>
                        <span>Google Ads remarketing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#14b8a6] mr-2">•</span>
                        <span>Social media pixels (Facebook, LinkedIn)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#14b8a6] mr-2">•</span>
                        <span>Email campaign tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Third-Party Cookies</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  In addition to our own cookies, we may use various third-party cookies to report usage statistics,
                  deliver advertisements, and provide social media features:
                </p>
                <ul className="space-y-2 text-gray-600 mt-4">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Google Analytics:</strong> Tracks and reports website traffic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Google Ads:</strong> Delivers and tracks advertising campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Social Media Platforms:</strong> Enable social sharing and advertising features</span>
                  </li>
                </ul>
              </div>

              {/* Managing Cookies */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">How to Manage Cookies</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  You have the right to decide whether to accept or reject cookies. You can manage your cookie
                  preferences through:
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Browser Settings</h3>
                <p className="text-gray-600 leading-relaxed">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Block all cookies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Accept only first-party cookies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Delete cookies when you close your browser</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 mr-3 flex-shrink-0"></span>
                    <span>Get notifications before a cookie is stored</span>
                  </li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> If you disable cookies, some features of our website may not function properly,
                    and your user experience may be affected.
                  </p>
                </div>
              </div>

              {/* Updates to Policy */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    <Info className="w-5 h-5 text-[#116366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Updates to This Policy</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                  operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about
                  our use of cookies.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-br from-[#116366]/5 to-[#14b8a6]/5 border border-[#116366]/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Questions About Cookies?</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-900 font-semibold">CV Autobot Wijaya Solution</p>
                  <p className="text-gray-600">Email: privacy@autobot.co.id</p>
                  <p className="text-gray-600">Phone: +62 812 3456 7890</p>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
