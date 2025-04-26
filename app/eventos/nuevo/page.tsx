"use client"

import type React from "react"
import { useCrearEvento } from "@/hooks/use-createEventos"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Save, ArrowLeft } from "lucide-react"

export default function NuevoEventoPage() {
  const router = useRouter();
  const {isSubmitting, error, crearEvento} = useCrearEvento();
  const [formData, setFormData] = useState({
    titulo: "",
    fecha: "",
    horaInicio: "",
    horaFin: "",
    lugar: "",
    descripcion: "",
    tipo: "",
    participantesMax: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, tipo: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await crearEvento(formData);
      alert("evento creado"); 
      router.push("/eventos");
    } catch (error) {
      alert(error || "Ocurrió un error");
    }
    
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Button variant="outline" onClick={() => router.push("/eventos")} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Eventos
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Crear Nuevo Evento</CardTitle>
          <CardDescription>
            Completa el formulario con la información del evento que deseas agregar al calendario.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="titulo" className="text-sm font-medium">
                Título del Evento <span className="text-red-500">*</span>
              </label>
              <Input
                id="titulo"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                placeholder="Ej: Limpieza de Playa Doña Ana"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label htmlFor="fecha" className="text-sm font-medium">
                  Fecha <span className="text-red-500">*</span>
                </label>
                <Input id="fecha" name="fecha" type="date" value={formData.fecha} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <label htmlFor="horaInicio" className="text-sm font-medium">
                  Hora de Inicio <span className="text-red-500">*</span>
                </label>
                <Input
                  id="horaInicio"
                  name="horaInicio"
                  type="time"
                  value={formData.horaInicio}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="horaFin" className="text-sm font-medium">
                  Hora de Finalización <span className="text-red-500">*</span>
                </label>
                <Input
                  id="horaFin"
                  name="horaFin"
                  type="time"
                  value={formData.horaFin}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="lugar" className="text-sm font-medium">
                  Lugar <span className="text-red-500">*</span>
                </label>
                <Input
                  id="lugar"
                  name="lugar"
                  value={formData.lugar}
                  onChange={handleChange}
                  placeholder="Ej: Playa Doña Ana, Puntarenas"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="tipo" className="text-sm font-medium">
                  Tipo de Evento <span className="text-red-500">*</span>
                </label>
                <Select value={formData.tipo} onValueChange={handleSelectChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Limpieza">Limpieza</SelectItem>
                    <SelectItem value="Taller">Taller</SelectItem>
                    <SelectItem value="Charla">Charla</SelectItem>
                    <SelectItem value="Monitoreo">Monitoreo</SelectItem>
                    <SelectItem value="Festival">Festival</SelectItem>
                    <SelectItem value="Otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="descripcion" className="text-sm font-medium">
                Descripción <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="Describe los detalles del evento, objetivos, actividades, etc."
                rows={5}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="participantesMax" className="text-sm font-medium">
                  Número Máximo de Participantes
                </label>
                <Input
                  id="participantesMax"
                  name="participantesMax"
                  type="number"
                  min="1"
                  value={formData.participantesMax}
                  onChange={handleChange}
                  placeholder="Ej: 30 (Dejar en blanco si no hay límite)"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Imagen del Evento</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500 mb-2">
                  Arrastra y suelta una imagen aquí, o haz clic para seleccionar
                </p>
                <p className="text-xs text-gray-400">PNG, JPG o JPEG (máx. 5MB)</p>
                <input type="file" className="hidden" accept="image/png, image/jpeg, image/jpg" />
                <Button type="button" variant="outline" size="sm" className="mt-4">
                  Seleccionar Archivo
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push("/eventos")}>
            Cancelar
          </Button>
          <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700" onClick={handleSubmit}>
            <Save  className="mr-2 h-4 w-4" /> {isSubmitting ? "guardando" : "guardar evento"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
