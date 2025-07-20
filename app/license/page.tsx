import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content License - SikhSoorme",
  description:
    "Content licensing and usage rights for SikhSoorme - understanding how our heritage content can be used and shared.",
}

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Content License</h1>
          <p className="text-xl text-amber-100">Understanding how our heritage content can be used and shared</p>
          <div className="mt-6 text-sm text-amber-200">Last updated: January 2025</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-amber-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            SikhSoorme is dedicated to preserving and sharing Sikh heritage with the world. We believe that knowledge
            about our history, culture, and personalities should be accessible to all while respecting the dignity and
            significance of our heritage.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This page explains how our content is licensed and how you can use it to further education, research, and
            cultural preservation.
          </p>
        </div>

        {/* Content Categories */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Content Categories</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Original Research & Writing</h3>
              <p className="text-green-800 text-sm mb-3">
                Content created by our community contributors, including biographies, historical analysis, and
                educational materials.
              </p>
              <div className="bg-green-100 p-3 rounded text-xs text-green-700">
                <strong>License:</strong> Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Historical Images & Artwork</h3>
              <p className="text-blue-800 text-sm mb-3">
                Historical photographs, paintings, and artwork depicting Sikh personalities and events.
              </p>
              <div className="bg-blue-100 p-3 rounded text-xs text-blue-700">
                <strong>License:</strong> Varies by source - see individual attribution
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Platform Code & Design</h3>
              <p className="text-purple-800 text-sm mb-3">
                The SikhSoorme website code, design elements, and technical infrastructure.
              </p>
              <div className="bg-purple-100 p-3 rounded text-xs text-purple-700">
                <strong>License:</strong> MIT License (Open Source)
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">Community Contributions</h3>
              <p className="text-orange-800 text-sm mb-3">
                User-submitted content, corrections, and additions to our knowledge base.
              </p>
              <div className="bg-orange-100 p-3 rounded text-xs text-orange-700">
                <strong>License:</strong> CC BY-SA 4.0 (upon submission)
              </div>
            </div>
          </div>
        </div>

        {/* Creative Commons License */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Creative Commons Attribution-ShareAlike 4.0</h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                CC
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">CC BY-SA 4.0</h3>
                <p className="text-gray-600 text-sm">Most of our original content is available under this license</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">✅ You Are Free To:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    <strong>Share</strong> — copy and redistribute the material in any medium or format
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    <strong>Adapt</strong> — remix, transform, and build upon the material
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    <strong>Commercial Use</strong> — use for any purpose, even commercially
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    <strong>Educational Use</strong> — use in schools, universities, and research
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">📋 Under These Terms:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>
                    <strong>Attribution</strong> — You must give appropriate credit to SikhSoorme
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>
                    <strong>ShareAlike</strong> — If you remix or adapt, you must use the same license
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>
                    <strong>No Additional Restrictions</strong> — You cannot add legal or technical restrictions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>
                    <strong>Indicate Changes</strong> — You must indicate if you made changes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Examples</h2>

          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Encouraged Uses</h3>
              <ul className="list-disc list-inside text-green-800 space-y-1 text-sm">
                <li>Educational materials for schools and universities</li>
                <li>Research papers and academic publications</li>
                <li>Cultural presentations and community events</li>
                <li>Documentary films and educational videos</li>
                <li>Museum exhibitions and cultural displays</li>
                <li>Translation into other languages</li>
                <li>Creating derivative educational content</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">⚠️ Please Be Mindful</h3>
              <ul className="list-disc list-inside text-yellow-800 space-y-1 text-sm">
                <li>Always provide proper attribution to SikhSoorme</li>
                <li>Respect the cultural and religious significance of the content</li>
                <li>Ensure accuracy when adapting or translating content</li>
                <li>Use content in ways that honor Sikh heritage and values</li>
                <li>Check individual image licenses for specific restrictions</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Inappropriate Uses</h3>
              <ul className="list-disc list-inside text-red-800 space-y-1 text-sm">
                <li>Misrepresenting historical facts or personalities</li>
                <li>Using content in ways that disrespect Sikh values</li>
                <li>Creating misleading or false information</li>
                <li>Using content for hate speech or discrimination</li>
                <li>Claiming exclusive ownership of our open content</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Attribution Guidelines */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Attribute</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">For Academic/Research Use:</h3>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                <p className="mb-2">
                  Content from SikhSoorme. (2025). [Title of Content]. Retrieved from https://sikhsoorme.com/[url]
                </p>
                <p>Licensed under CC BY-SA 4.0</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">For General Use:</h3>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                <p className="mb-2">Source: SikhSoorme (sikhsoorme.com)</p>
                <p>License: CC BY-SA 4.0</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">For Digital/Online Use:</h3>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                <p className="mb-2">
                  Content adapted from{" "}
                  <a href="https://sikhsoorme.com" className="text-blue-600 underline">
                    SikhSoorme
                  </a>
                </p>
                <p>
                  Licensed under{" "}
                  <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="text-blue-600 underline">
                    CC BY-SA 4.0
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contributing */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contributing Content</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">When You Contribute:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                <li>Your contributions become available under CC BY-SA 4.0</li>
                <li>You retain copyright but grant usage rights to the community</li>
                <li>Your work can be used, adapted, and built upon by others</li>
                <li>You'll be credited as a contributor</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">What We Need:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                <li>Confirmation that you own or have rights to the content</li>
                <li>Agreement to license under CC BY-SA 4.0</li>
                <li>Accurate sources and references</li>
                <li>Respectful and factual content</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Questions */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Licensing?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">General Licensing Questions</h3>
              <p className="text-gray-700 text-sm mb-2">For questions about how you can use our content:</p>
              <p className="text-amber-700 font-medium">license@sikhsoorme.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Content Contributions</h3>
              <p className="text-gray-700 text-sm mb-2">
                To contribute content or discuss licensing of your materials:
              </p>
              <p className="text-orange-700 font-medium">contribute@sikhsoorme.com</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg">
            <p className="text-gray-600 text-sm">
              <strong>Note:</strong> This page provides general guidance on our content licensing. For specific legal
              questions or commercial licensing arrangements, please contact us directly. We're committed to making Sikh
              heritage accessible while respecting intellectual property rights.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
