"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Save, ArrowLeft, Plus, X } from "lucide-react"

export default function NuevaEspeciePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nombreComun: "",
    nombreCientifico: "",
    estadoConservacion: "",
    descripcion: "",
    amenazas: [""],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, estadoConservacion: value }))
  }

  const handleAmenazaChange = (index: number, value: string) => {
    const nuevasAmenazas = [...formData.amenazas]
    nuevasAmenazas[index] = value
    setFormData((prev) => ({ ...prev, amenazas: nuevasAmenazas }))
  }

  const agregarAmenaza = () => {
    setFormData((prev) => ({ ...prev, amenazas: [...prev.amenazas, ""] }))
  }

  const eliminarAmenaza = (index: number) => {
    if (formData.amenazas.length > 1) {
      const nuevasAmenazas = formData.amenazas.filter((_, i) => i !== index)
      setFormData((prev) => ({ ...prev, amenazas: nuevasAmenazas }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar la nueva especie
    console.log("Nueva especie:", formData)
    alert("Especie guardada correctamente")
    router.push("/especies")
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Button variant="outline" onClick={() => router.push("/especies")} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Especies
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Agregar Nueva Especie Marina</CardTitle>
          <CardDescription>
            Completa el formulario con la información de la especie marina que deseas agregar a la base de datos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="nombreComun" className="text-sm font-medium">
                  Nombre Común <span className="text-red-500">*</span>
                </label>
                <Input
                  id="nombreComun"
                  name="nombreComun"
                  value={formData.nombreComun}
                  onChange={handleChange}
                  placeholder="Ej: Tortuga Lora"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="nombreCientifico" className="text-sm font-medium">
                  Nombre Científico <span className="text-red-500">*</span>
                </label>
                <Input
                  id="nombreCientifico"
                  name="nombreCientifico"
                  value={formData.nombreCientifico}
                  onChange={handleChange}
                  placeholder="Ej: Lepidochelys olivacea"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="estadoConservacion" className="text-sm font-medium">
                Estado de Conservación <span className="text-red-500">*</span>
              </label>
              <Select value={formData.estadoConservacion} onValueChange={handleSelectChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="En peligro crítico">En peligro crítico</SelectItem>
                  <SelectItem value="En peligro">En peligro</SelectItem>
                  <SelectItem value="Vulnerable">Vulnerable</SelectItem>
                  <SelectItem value="Casi amenazado">Casi amenazado</SelectItem>
                  <SelectItem value="Preocupación menor">Preocupación menor</SelectItem>
                  <SelectItem value="Datos insuficientes">Datos insuficientes</SelectItem>
                </SelectContent>
              </Select>
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
                placeholder="Describe las características principales de la especie..."
                rows={5}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">
                  Principales Amenazas <span className="text-red-500">*</span>
                </label>
                <Button type="button" variant="outline" size="sm" onClick={agregarAmenaza}>
                  <Plus className="h-4 w-4 mr-1" /> Agregar
                </Button>
              </div>

              <div className="space-y-3">
                {formData.amenazas.map((amenaza, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={amenaza}
                      onChange={(e) => handleAmenazaChange(index, e.target.value)}
                      placeholder="Ej: Pesca incidental"
                      required
                    />
                    {formData.amenazas.length > 1 && (
                      <Button type="button" variant="ghost" size="icon" onClick={() => eliminarAmenaza(index)}>
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Imagen <span className="text-red-500">*</span>
              </label>
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
          <Button variant="outline" onClick={() => router.push("/especies")}>
            Cancelar
          </Button>
          <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700" onClick={handleSubmit}>
            <Save className="mr-2 h-4 w-4" /> Guardar Especie
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
