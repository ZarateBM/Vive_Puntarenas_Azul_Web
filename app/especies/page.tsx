import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus, Search } from "lucide-react"
import EspecieCard from "@/components/especie-card"

// Datos de muestra para especies marinas
const especiesMuestra = [
  {
    id: 1,
    nombreComun: "Tortuga Lora",
    nombreCientifico: "Lepidochelys olivacea",
    imagen: "/placeholder.svg?height=300&width=400",
    estadoConservacion: "Vulnerable",
    descripcion:
      "La tortuga lora es la más pequeña de todas las especies de tortugas marinas. Se encuentra principalmente en el Océano Pacífico y el Océano Índico.",
    amenazas: ["Pesca incidental", "Contaminación por plásticos", "Desarrollo costero"],
  },
  {
    id: 2,
    nombreComun: "Delfín Nariz de Botella",
    nombreCientifico: "Tursiops truncatus",
    imagen: "/placeholder.svg?height=300&width=400",
    estadoConservacion: "Preocupación menor",
    descripcion:
      "El delfín nariz de botella es una de las especies de delfines más conocidas. Son muy inteligentes y sociables, viviendo en grupos llamados manadas.",
    amenazas: ["Contaminación acústica", "Pesca incidental", "Contaminación química"],
  },
  {
    id: 3,
    nombreComun: "Pez Loro",
    nombreCientifico: "Scarus iseri",
    imagen: "/placeholder.svg?height=300&width=400",
    estadoConservacion: "Preocupación menor",
    descripcion:
      "Los peces loro son cruciales para la salud de los arrecifes de coral. Se alimentan de algas que crecen sobre los corales, ayudando a mantenerlos limpios y saludables.",
    amenazas: ["Sobrepesca", "Degradación del hábitat", "Cambio climático"],
  },
  {
    id: 4,
    nombreComun: "Manta Raya",
    nombreCientifico: "Manta birostris",
    imagen: "/placeholder.svg?height=300&width=400",
    estadoConservacion: "Vulnerable",
    descripcion:
      "Las mantas rayas son los peces cartilaginosos más grandes del mundo. Son filtradoras y se alimentan principalmente de plancton.",
    amenazas: ["Pesca dirigida", "Pesca incidental", "Contaminación marina"],
  },
  {
    id: 5,
    nombreComun: "Ballena Jorobada",
    nombreCientifico: "Megaptera novaeangliae",
    imagen: "/placeholder.svg?height=300&width=400",
    estadoConservacion: "Preocupación menor",
    descripcion:
      "Las ballenas jorobadas son conocidas por sus cantos complejos y sus impresionantes saltos fuera del agua. Migran anualmente a las aguas de Costa Rica para reproducirse.",
    amenazas: ["Colisiones con embarcaciones", "Enredos en artes de pesca", "Contaminación acústica"],
  },
  {
    id: 6,
    nombreComun: "Tiburón Martillo",
    nombreCientifico: "Sphyrna lewini",
    imagen: "/placeholder.svg?height=300&width=400",
    estadoConservacion: "En peligro crítico",
    descripcion:
      "El tiburón martillo es fácilmente reconocible por su cabeza en forma de martillo. Son depredadores importantes en el ecosistema marino.",
    amenazas: ["Pesca excesiva", "Comercio de aletas", "Degradación del hábitat"],
  },
]

export default function EspeciesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Especies Marinas de Puntarenas</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Conoce la diversa fauna marina que habita en nuestras costas y aprende sobre su importancia ecológica y estado
          de conservación.
        </p>
      </div>

      {/* Barra de búsqueda y botón de agregar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full sm:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar especies..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>
        <Button asChild className="bg-cyan-600 hover:bg-cyan-700 w-full sm:w-auto">
          <Link href="/especies/nueva">
            <Plus className="mr-2 h-4 w-4" /> Agregar Especie
          </Link>
        </Button>
      </div>

      {/* Filtros de estado de conservación */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Filtrar por estado de conservación:</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
            Todos
          </Button>
          <Button variant="outline">En peligro crítico</Button>
          <Button variant="outline">En peligro</Button>
          <Button variant="outline">Vulnerable</Button>
          <Button variant="outline">Casi amenazado</Button>
          <Button variant="outline">Preocupación menor</Button>
        </div>
      </div>

      {/* Lista de especies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {especiesMuestra.map((especie) => (
          <EspecieCard key={especie.id} especie={especie} />
        ))}
      </div>

      {/* Paginación */}
      <div className="mt-12 flex justify-center">
        <nav className="inline-flex rounded-md shadow">
          <a
            href="#"
            className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            Anterior
          </a>
          <a
            href="#"
            className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-cyan-600 hover:bg-cyan-50"
          >
            1
          </a>
          <a
            href="#"
            className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            2
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            Siguiente
          </a>
        </nav>
      </div>
    </div>
  )
}
