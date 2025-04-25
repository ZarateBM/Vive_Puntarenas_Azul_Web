import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Fish, Calendar, ImageIcon, Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=800&width=1600"
            alt="Playa de Puntarenas"
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Vive Puntarenas Azul</h1>
          <p className="text-xl sm:text-2xl text-white mb-8">
            Educando sobre el cuido de playas y la vida marina en nuestra ciudad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="/educacion">
                Aprende Más <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20"
            >
              <Link href="/contacto">
                Únete como Voluntario <Heart className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestro Propósito</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Informar, concientizar y educar a la comunidad de Puntarenas sobre la protección de las playas, la
            preservación de la fauna marina y prácticas sostenibles en la vida diaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="bg-cyan-100 p-4 rounded-full mb-4">
              <Fish className="h-8 w-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Vida Marina</h3>
            <p className="text-gray-600 mb-4">
              Conoce las especies marinas que habitan nuestras costas y cómo podemos protegerlas.
            </p>
            <Button asChild variant="link" className="mt-auto text-cyan-600">
              <Link href="/especies">
                Explorar Especies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="bg-cyan-100 p-4 rounded-full mb-4">
              <Calendar className="h-8 w-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Actividades</h3>
            <p className="text-gray-600 mb-4">
              Participa en limpiezas de playas, charlas educativas y talleres comunitarios.
            </p>
            <Button asChild variant="link" className="mt-auto text-cyan-600">
              <Link href="/eventos">
                Ver Calendario <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="bg-cyan-100 p-4 rounded-full mb-4">
              <ImageIcon className="h-8 w-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Galería</h3>
            <p className="text-gray-600 mb-4">
              Imágenes de nuestras playas, fauna marina y actividades de voluntariado.
            </p>
            <Button asChild variant="link" className="mt-auto text-cyan-600">
              <Link href="/galeria">
                Ver Galería <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-cyan-700 text-white py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Únete a Nuestra Misión</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Juntos podemos hacer la diferencia. Participa en nuestras actividades, comparte información y ayúdanos a
            proteger nuestras playas y vida marina.
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
            <Link href="/contacto">Contáctanos</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
