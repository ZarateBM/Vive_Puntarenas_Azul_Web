import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

export default function EducacionPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Educación Ambiental</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Aprende sobre cómo proteger nuestras playas y la vida marina a través de prácticas sostenibles y acciones
          diarias.
        </p>
      </div>

      {/* Consejos para el cuidado de playas */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-cyan-700">Cuidado de Playas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Limpieza de playa"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">No Dejes Rastro</h3>
              <p className="text-gray-600 mb-4">
                Siempre lleva contigo una bolsa para recoger tu basura. Recuerda que los desechos plásticos pueden
                tardar cientos de años en degradarse y son especialmente dañinos para la vida marina.
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Lleva tus propias bolsas reutilizables</li>
                <li>Usa botellas de agua recargables</li>
                <li>Evita productos con microplásticos</li>
                <li>Participa en limpiezas comunitarias</li>
              </ul>
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="/eventos">
                  Unirse a Limpiezas <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Conservación marina"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Protege la Vida Marina</h3>
              <p className="text-gray-600 mb-4">
                Respeta el hábitat natural de las especies marinas. No toques los arrecifes de coral, no molestes a los
                animales y usa protector solar biodegradable para evitar dañar los ecosistemas.
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Usa protector solar biodegradable</li>
                <li>No toques ni alimentes a los animales marinos</li>
                <li>Respeta las áreas protegidas</li>
                <li>Aprende a identificar especies en peligro</li>
              </ul>
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="/especies">
                  Conocer Especies <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Infografías y recursos */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-cyan-700">Recursos Educativos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Guía de Reciclaje</h3>
            <p className="text-gray-600 mb-4">
              Aprende a separar correctamente los residuos y conoce qué materiales pueden reciclarse en Puntarenas.
            </p>
            <Button asChild variant="outline" className="w-full">
              <a href="#" download>
                <Download className="mr-2 h-4 w-4" /> Descargar PDF
              </a>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Impacto del Plástico</h3>
            <p className="text-gray-600 mb-4">
              Infografía sobre el ciclo de vida del plástico y su impacto en los ecosistemas marinos.
            </p>
            <Button asChild variant="outline" className="w-full">
              <a href="#" download>
                <Download className="mr-2 h-4 w-4" /> Descargar Infografía
              </a>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Guía de Especies</h3>
            <p className="text-gray-600 mb-4">
              Catálogo ilustrado de las principales especies marinas que habitan en las costas de Puntarenas.
            </p>
            <Button asChild variant="outline" className="w-full">
              <a href="#" download>
                <Download className="mr-2 h-4 w-4" /> Descargar Guía
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Prácticas sostenibles */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-cyan-700">Prácticas Sostenibles</h2>

        <div className="bg-cyan-50 rounded-lg p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-4">Acciones Diarias para Proteger Nuestros Océanos</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-cyan-700 mb-2">En Casa:</h4>
              <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-2">
                <li>Reduce el consumo de plásticos de un solo uso</li>
                <li>Ahorra agua y energía</li>
                <li>Usa productos de limpieza biodegradables</li>
                <li>Separa correctamente tus residuos</li>
                <li>Compra productos locales y de temporada</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-700 mb-2">En la Playa:</h4>
              <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-2">
                <li>Lleva tu basura de regreso</li>
                <li>Usa protector solar biodegradable</li>
                <li>Respeta las áreas de anidación de tortugas</li>
                <li>No extraigas conchas, arena o cualquier elemento natural</li>
                <li>Participa en actividades de conservación</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="/contacto">Comprométete con el Cambio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
