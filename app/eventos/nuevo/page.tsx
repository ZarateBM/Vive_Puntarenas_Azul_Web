"use client"

import type React from "react"
import { useCrearEvento } from "@/hooks/useCreateEventos"

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
    hora_inicio: "",
    hora_fin: "",
    lugar: "",
    descripcion: "",
    categoria: "",
    participantes: "",
  })

  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, categoria: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  }
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  }
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
  }
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file && (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/jpg")) {
        setFile(file);
      } else {
        alert("Por favor, selecciona una imagen válida (PNG, JPG o JPEG).");
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await crearEvento(formData, file as File);
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
                <Input
                  id="fecha"
                  name="fecha"
                  type="date"
                  value={formData.fecha}
                  onChange={handleChange}
                  required
              />
              </div>
              <div className="space-y-2">
                <label htmlFor="horaInicio" className="text-sm font-medium">
                  Hora de Inicio <span className="text-red-500">*</span>
                </label>
                <Input
                  id="hora_inicio"
                  name="hora_inicio"
                  type="time"
                  value={formData.hora_inicio}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="horaFin" className="text-sm font-medium">
                  Hora de Finalización <span className="text-red-500">*</span>
                </label>
                <Input
                  id="hora_fin"
                  name="hora_fin"
                  type="time"
                  value={formData.hora_fin}
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
                <label htmlFor="categoria" className="text-sm font-medium">
                  Tipo de Evento <span className="text-red-500">*</span>
                </label>
                <Select value={formData.categoria} onValueChange={handleSelectChange}>
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
                  id="participantes"
                  name="participantes"
                  type="number"
                  min="1"
                  value={formData.participantes}
                  onChange={handleChange}
                  placeholder="Ej: 30 (Dejar en blanco si no hay límite)"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Imagen del Evento</label>
              <div className=
              {`border-2 border-dashed rounded-lg p-6 text-center ${dragOver ? "border-cyan-600" : "border-gray-300"}
              ${file ? "bg-gray-100" : "bg-white"} transition duration-200 ease-in-out`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("fileInput")?.click()}
              >
                <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500 mb-2">
                  Arrastra y suelta una imagen aquí, o haz clic para seleccionar
                </p>
                <p className="text-xs text-gray-400">PNG, JPG o JPEG (máx. 5MB)</p>
                <input 
                  id="fileInput"
                  type="file" 
                  accept="image/png, image/jpeg, image/jpg" 
                  onChange={handleImageChange}
                  className="hidden"
                />
                {file && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-700">Archivo seleccionado: {file.name}</p>
                  </div>
                )}
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
