import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus, Calendar, MapPin, Clock, Users, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEventos } from "@/hooks/useEventos";

// Función para formatear la fecha
const formatearFecha = (fechaStr: string) => {
  const fecha = new Date(fechaStr)
  return fecha.toLocaleDateString("es-CR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

// Función para determinar el color del badge según el tipo de evento
const getTipoColor = (tipo: string) => {
  switch (tipo.toLowerCase()) {
    case "limpieza":
      return "bg-green-500 hover:bg-green-600"
    case "taller":
      return "bg-blue-500 hover:bg-blue-600"
    case "charla":
      return "bg-purple-500 hover:bg-purple-600"
    case "monitoreo":
      return "bg-amber-500 hover:bg-amber-600"
    case "festival":
      return "bg-pink-500 hover:bg-pink-600"
    default:
      return "bg-gray-500 hover:bg-gray-600"
  }
}

export default function EventosPage() {
  const { eventos, isLoading, error } = useEventos();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 /> {/* Muestra un spinner mientras se cargan los datos */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Calendario de Actividades</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Participa en nuestras actividades de conservación, educación y voluntariado. Juntos podemos hacer la
          diferencia.
        </p>
      </div>

      {/* Botón de agregar evento y filtros */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
            Todos
          </Button>
          <Button variant="outline">Limpieza</Button>
          <Button variant="outline">Taller</Button>
          <Button variant="outline">Charla</Button>
          <Button variant="outline">Monitoreo</Button>
          <Button variant="outline">Festival</Button>
        </div>
        <Button asChild className="bg-cyan-600 hover:bg-cyan-700 w-full sm:w-auto">
          <Link href="/eventos/nuevo">
            <Plus className="mr-2 h-4 w-4" /> Agregar Evento
          </Link>
        </Button>
      </div>

      {/* Lista de eventos */}
      <div className="space-y-6">
        {eventos.map((evento) => (
          <Card key={evento.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={evento.imagen || "/placeholder.svg"}
                  alt={evento.titulo}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{evento.titulo}</CardTitle>
                      <CardDescription className="mt-1">
                        <span className="flex items-center text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatearFecha(evento.fecha)}
                        </span>
                      </CardDescription>
                    </div>
                    <Badge className={getTipoColor(evento.tipo)}>{evento.tipo}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-4">{evento.descripcion}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-cyan-600" />
                      <span>{evento.hora}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-cyan-600" />
                      <span>{evento.lugar}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-cyan-600" />
                      <span>{evento.participantes} participantes</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                    <Link href={`/eventos/${evento.id}`}>Ver Detalles</Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
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
  );
}
