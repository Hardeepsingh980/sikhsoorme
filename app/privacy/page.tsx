import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - SikhSoorme",
  description:
    "Privacy policy and data protection information for SikhSoorme - preserving Sikh heritage with transparency and respect.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-amber-100">Your privacy and data protection are fundamental to our mission</p>
          <div className="mt-6 text-sm text-amber-200">Last updated: January 2025</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-amber-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
          <p className="text-gray-700 leading-relaxed">
            SikhSoorme is committed to protecting your privacy and handling your personal information with care and
            respect. This privacy policy explains how we collect, use, and protect your information when you use our
            platform to explore Sikh heritage and history.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Information You Provide</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Contact information when you reach out to us</li>
                <li>Content contributions and submissions</li>
                <li>Feedback and suggestions you share</li>
                <li>Community participation (Discord, GitHub)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Usage analytics (pages visited, time spent)</li>
                <li>Device information (browser type, operating system)</li>
                <li>IP address and general location</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">Platform Improvement</h3>
              <ul className="list-disc list-inside text-amber-800 space-y-1 text-sm">
                <li>Enhance user experience</li>
                <li>Fix technical issues</li>
                <li>Develop new features</li>
                <li>Analyze usage patterns</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">Community Building</h3>
              <ul className="list-disc list-inside text-orange-800 space-y-1 text-sm">
                <li>Respond to inquiries</li>
                <li>Facilitate contributions</li>
                <li>Build community connections</li>
                <li>Share project updates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Protection */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Protection & Security</h2>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-gray-700">
                <strong>Encryption:</strong> All data transmission is encrypted using industry-standard SSL/TLS
                protocols
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-gray-700">
                <strong>Access Control:</strong> Limited access to personal information on a need-to-know basis
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-gray-700">
                <strong>Data Minimization:</strong> We collect only the information necessary for our services
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-gray-700">
                <strong>Regular Updates:</strong> Security measures are regularly reviewed and updated
              </p>
            </div>
          </div>
        </div>

        {/* Third-Party Services */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Analytics</h3>
              <p className="text-sm text-gray-600">
                We use privacy-focused analytics to understand usage patterns and improve our platform.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Hosting</h3>
              <p className="text-sm text-gray-600">
                Our platform is hosted on secure, compliant infrastructure providers.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Communication</h3>
              <p className="text-sm text-gray-600">
                We use secure email and messaging services for community communication.
              </p>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800">Access & Portability</h3>
              <p className="text-gray-600 text-sm">
                Request access to your personal data and receive it in a portable format
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-800">Correction</h3>
              <p className="text-gray-600 text-sm">
                Request correction of inaccurate or incomplete personal information
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-800">Deletion</h3>
              <p className="text-gray-600 text-sm">
                Request deletion of your personal data (subject to legal requirements)
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-gray-800">Objection</h3>
              <p className="text-gray-600 text-sm">Object to processing of your personal data for specific purposes</p>
            </div>
          </div>
        </div>

        {/* Cookies */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies & Tracking</h2>

          <div className="space-y-4">
            <p className="text-gray-700">
              We use cookies and similar technologies to enhance your experience and understand how our platform is
              used.
            </p>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-900 mb-2">Essential Cookies</h3>
              <p className="text-amber-800 text-sm">Required for basic platform functionality and security</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-2">Analytics Cookies</h3>
              <p className="text-orange-800 text-sm">Help us understand usage patterns and improve our services</p>
            </div>

            <p className="text-gray-600 text-sm">
              You can control cookie preferences through your browser settings. Note that disabling certain cookies may
              affect platform functionality.
            </p>
          </div>
        </div>

        {/* Contact & Updates */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions & Updates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Contact Us</h3>
              <p className="text-gray-700 text-sm mb-2">For privacy-related questions or to exercise your rights:</p>
              <p className="text-amber-700 font-medium">privacy@sikhsoorme.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Policy Updates</h3>
              <p className="text-gray-700 text-sm">
                We may update this policy periodically. Significant changes will be communicated through our platform
                and community channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
