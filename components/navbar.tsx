"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-cyan-600">Vive Puntarenas Azul</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors">
              Inicio
            </Link>
            <Link href="/educacion" className="px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors">
              Educación
            </Link>
            <Link href="/especies" className="px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors">
              Especies Marinas
            </Link>
            <Link href="/eventos" className="px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors">
              Eventos
            </Link>
            <Link href="/galeria" className="px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors">
              Galería
            </Link>
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700 ml-4">
              <Link href="/contacto">Contacto</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-cyan-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/educacion"
              className="block px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Educación
            </Link>
            <Link
              href="/especies"
              className="block px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Especies Marinas
            </Link>
            <Link
              href="/eventos"
              className="block px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Eventos
            </Link>
            <Link
              href="/galeria"
              className="block px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Galería
            </Link>
            <Link
              href="/contacto"
              className="block px-3 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
