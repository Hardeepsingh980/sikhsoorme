import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-amber-100 to-orange-100 border-b-2 border-amber-200 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-300">
               <span className="text-white font-bold text-lg">ਸ</span>
             </div>
             <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border border-white"></div>
           </div>
           <div>
             <h1 className="text-2xl font-bold text-amber-900 tracking-wide">SikhSoorme</h1>
             <p className="text-sm text-amber-700 italic">ਸਿੱਖ ਸੂਰਮੇ - Sikh Heroes</p>
           </div>
         </div>
         <nav className="hidden md:flex items-center gap-8">
           <Link href="/" className="text-amber-800 hover:text-orange-600 font-medium transition-colors">
             Home
           </Link>
           <Link href="/categories" className="text-amber-800 hover:text-orange-600 font-medium transition-colors">
             Categories
           </Link>
           <Link href="/timeline" className="text-amber-800 hover:text-orange-600 font-medium transition-colors">
             Timeline
           </Link>
           <Link href="/contribute" className="text-amber-800 hover:text-orange-600 font-medium transition-colors">
             Contribute
           </Link>
           <Link href="/about" className="text-amber-800 hover:text-orange-600 font-medium transition-colors">
             About
           </Link>
         </nav>
       </div>
     </div>
   </header>
  )
}
