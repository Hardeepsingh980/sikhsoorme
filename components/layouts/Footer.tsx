import { GITHUB_REPO } from '@/app/consts'
import { Separator } from '@radix-ui/react-separator'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-orange-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">ਸ</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold">SikhSoorme</h3>
              <p className="text-orange-200 text-sm">ਸਿੱਖ ਸੂਰਮੇ - Preserving Sikh Heritage</p>
            </div>
          </div>
          <p className="text-orange-100 leading-relaxed mb-6 max-w-md">
            A community-driven encyclopedia dedicated to preserving and sharing the inspiring stories 
            of Sikh personalities who shaped history through their courage, wisdom, and devotion.
          </p>
          <div className="flex items-center gap-4 text-orange-200">
            <span className="text-sm">Built by the Global Sikh Community</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-orange-200">Explore Heritage</h4>
          <ul className="space-y-3 text-orange-100">
            <li><Link href="/categories" className="hover:text-white transition-colors">All Categories</Link></li>
            <li><Link href="/timeline" className="hover:text-white transition-colors">Historical Timeline</Link></li>
            <li><Link href="/search" className="hover:text-white transition-colors">Advanced Search</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-orange-200">Community</h4>
          <ul className="space-y-3 text-orange-100">
            <li><Link href="/contribute" className="hover:text-white transition-colors">How to Contribute</Link></li>
            <li><Link href={GITHUB_REPO} className="hover:text-white transition-colors">GitHub Repository</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <Separator className="bg-orange-700 mb-8" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-orange-200 text-sm">
          <p>© 2025 SikhSoorme. All content available under Creative Commons License.</p>
        </div>
        <div className="flex items-center gap-6 text-orange-200 text-sm">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/license" className="hover:text-white transition-colors">Content License</Link>
        </div>
      </div>
    </div>
  </footer>
  )
}
