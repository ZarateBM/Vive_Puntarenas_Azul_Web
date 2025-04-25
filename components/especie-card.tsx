import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info } from "lucide-react"

// Función para determinar el color del badge según el estado de conservación
const getEstadoColor = (estado: string) => {
  switch (estado.toLowerCase()) {
    case "en peligro crítico":
      return "bg-red-500 hover:bg-red-600"
    case "en peligro":
      return "bg-orange-500 hover:bg-orange-600"
    case "vulnerable":
      return "bg-yellow-500 hover:bg-yellow-600"
    case "casi amenazado":
      return "bg-blue-500 hover:bg-blue-600"
    case "preocupación menor":
      return "bg-green-500 hover:bg-green-600"
    default:
      return "bg-gray-500 hover:bg-gray-600"
  }
}

interface Especie {
  id: number
  nombreComun: string
  nombreCientifico: string
  imagen: string
  estadoConservacion: string
  descripcion: string
  amenazas: string[]
}

interface EspecieCardProps {
  especie: Especie
}

export default function EspecieCard({ especie }: EspecieCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <img
          src={especie.imagen || "/placeholder.svg"}
          alt={especie.nombreComun}
          className="w-full h-full object-cover"
        />
        <Badge className={`absolute top-3 right-3 ${getEstadoColor(especie.estadoConservacion)}`}>
          {especie.estadoConservacion}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle>{especie.nombreComun}</CardTitle>
        <CardDescription className="italic">{especie.nombreCientifico}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-3">{especie.descripcion}</p>

        <div className="mt-4">
          <h4 className="text-sm font-semibold mb-2">Principales amenazas:</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            {especie.amenazas.slice(0, 2).map((amenaza, index) => (
              <li key={index}>{amenaza}</li>
            ))}
            {especie.amenazas.length > 2 && <li>Y {especie.amenazas.length - 2} más...</li>}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
          <Link href={`/especies/${especie.id}`}>
            <Info className="mr-2 h-4 w-4" /> Ver Detalles
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
