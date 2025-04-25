"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload, X } from "lucide-react"

// Datos de muestra para la galería
const imagenesMuestra = [
  {
    id: 1,
    url: "/placeholder.svg?height=400&width=600",
    titulo: "Limpieza en Playa Doña Ana",
    categoria: "Voluntariado",
    descripcion: "Voluntarios recogiendo residuos plásticos durante la jornada de limpieza.",
  },
  {
    id: 2,
    url: "/placeholder.svg?height=400&width=600",
    titulo: "Tortuga Lora",
    categoria: "Fauna Marina",
    descripcion: "Tortuga lora nadando en las aguas cristalinas de Puntarenas.",
  },
  {
    id: 3,
    url: "/placeholder.svg?height=400&width=600",
    titulo: "Taller de Reciclaje",
    categoria: "Educación",
    descripcion: "Niños aprendiendo a reciclar correctamente durante un taller educativo.",
  },
  {
    id: 4,
    url: "/placeholder.svg?height=400&width=600",
    titulo: "Arrecife de Coral",
    categoria: "Ecosistemas",
    descripcion: "Hermoso arrecife de coral en las costas de Puntarenas.",
  },
  {
    id: 5,
    url: "/placeholder.svg?height=400&width=600",
    titulo: "Delfines",
    categoria: "Fauna Marina",
    descripcion: "Grupo de delfines nariz de botella avistados cerca de la costa.",
  },
  {
    id: 6,
    url: "/placeholder.svg?height=400&width=600",
    titulo: "Manglares",
    categoria: "Ecosistemas",
    descripcion: "Vista aérea de los manglares, importantes ecosistemas costeros.",
  },
  {
    id: 7,
    url: "/placeholder.svg?height=400&width=600",
    titulo: "Charla Educativa",
    categoria: "Educación",
    descripcion: "Expertos impartiendo charla sobre conservación marina.",
  },
  {
    id: 8,
    url: "/placeholder.svg?height=400&width=600",
    titulo: "Monitoreo de Especies",
    categoria: "Investigación",
    descripcion: "Científicos realizando monitoreo de especies marinas.",
  },
  {
    id: 9,
    url: "/placeholder.svg?height=400&width=600",
    titulo: "Atardecer en Puntarenas",
    categoria: "Paisajes",
    descripcion: "Hermoso atardecer en la playa de Puntarenas.",
  },
]

export default function GaleriaPage() {
  const [filtroActivo, setFiltroActivo] = useState<string | null>(null)
  const [imagenSeleccionada, setImagenSeleccionada] = useState<(typeof imagenesMuestra)[0] | null>(null)

  // Filtrar imágenes según la categoría seleccionada
  const imagenesFiltradas = filtroActivo
    ? imagenesMuestra.filter((img) => img.categoria === filtroActivo)
    : imagenesMuestra

  // Obtener categorías únicas para los filtros
  const categorias = Array.from(new Set(imagenesMuestra.map((img) => img.categoria)))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Galería de Imágenes</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explora nuestra colección de imágenes de la vida marina, actividades de conservación y los hermosos paisajes
          de Puntarenas.
        </p>
      </div>

      {/* Filtros y botón de subir */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
          <Button
            variant={filtroActivo === null ? "default" : "outline"}
            onClick={() => setFiltroActivo(null)}
            className={filtroActivo === null ? "bg-cyan-600 hover:bg-cyan-700" : ""}
          >
            Todos
          </Button>
          {categorias.map((categoria) => (
            <Button
              key={categoria}
              variant={filtroActivo === categoria ? "default" : "outline"}
              onClick={() => setFiltroActivo(categoria)}
              className={filtroActivo === categoria ? "bg-cyan-600 hover:bg-cyan-700" : ""}
            >
              {categoria}
            </Button>
          ))}
        </div>
        <Button className="bg-cyan-600 hover:bg-cyan-700 w-full sm:w-auto">
          <Upload className="mr-2 h-4 w-4" /> Subir Imagen
        </Button>
      </div>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {imagenesFiltradas.map((imagen) => (
          <div
            key={imagen.id}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setImagenSeleccionada(imagen)}
          >
            <div className="relative h-64">
              <img src={imagen.url || "/placeholder.svg"} alt={imagen.titulo} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{imagen.titulo}</h3>
              <p className="text-sm text-gray-500">{imagen.categoria}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para ver imagen ampliada */}
      {imagenSeleccionada && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-4 flex justify-between items-center border-b">
              <h3 className="font-semibold text-lg">{imagenSeleccionada.titulo}</h3>
              <button onClick={() => setImagenSeleccionada(null)} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-grow overflow-auto">
              <img
                src={imagenSeleccionada.url || "/placeholder.svg"}
                alt={imagenSeleccionada.titulo}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">{imagenSeleccionada.categoria}</p>
                <p className="text-gray-700">{imagenSeleccionada.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
