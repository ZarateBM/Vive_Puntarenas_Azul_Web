import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-cyan-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Vive Puntarenas Azul</h3>
            <p className="text-cyan-100 mb-4 max-w-md">
              Educando sobre el cuido de playas y la vida marina en nuestra ciudad. Juntos podemos hacer la diferencia
              para preservar nuestro ecosistema marino.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-cyan-200 transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-cyan-200 transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-cyan-200 transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="mailto:contacto@vivepuntarenasazul.org"
                className="text-white hover:text-cyan-200 transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cyan-100 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/educacion" className="text-cyan-100 hover:text-white transition-colors">
                  Educación
                </Link>
              </li>
              <li>
                <Link href="/especies" className="text-cyan-100 hover:text-white transition-colors">
                  Especies Marinas
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-cyan-100 hover:text-white transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-cyan-100 hover:text-white transition-colors">
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <address className="not-italic text-cyan-100">
              <p className="mb-2">Puntarenas, Costa Rica</p>
              <p className="mb-2">
                <a href="mailto:contacto@vivepuntarenasazul.org" className="hover:text-white transition-colors">
                  contacto@vivepuntarenasazul.org
                </a>
              </p>
              <p>
                <a href="tel:+50612345678" className="hover:text-white transition-colors">
                  +506 1234 5678
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-cyan-700 mt-12 pt-8 text-center text-cyan-200">
          <p>© {new Date().getFullYear()} Vive Puntarenas Azul. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
