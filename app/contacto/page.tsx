"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Mail, Phone, Clock, Send, Facebook, Instagram, Twitter } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
    esVoluntario: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, esVoluntario: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("¡Gracias por contactarnos! Te responderemos a la brevedad.")
    // Resetear el formulario
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
      esVoluntario: false,
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          ¿Tienes preguntas o quieres unirte como voluntario? Estamos aquí para ayudarte.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulario de contacto */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
              <CardDescription>Completa el formulario y te responderemos a la brevedad.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium">
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correo electrónico <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-sm font-medium">
                    Teléfono
                  </label>
                  <Input
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="(506) 8888-8888"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-medium">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    rows={5}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="esVoluntario" checked={formData.esVoluntario} onCheckedChange={handleCheckboxChange} />
                  <label
                    htmlFor="esVoluntario"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Me interesa ser voluntario/a
                  </label>
                </div>

                <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700">
                  <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Información de contacto */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-cyan-700">Información de Contacto</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-cyan-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Dirección</h3>
                  <p className="text-gray-600">
                    Paseo de los Turistas, Puntarenas
                    <br />
                    Costa Rica
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-cyan-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Correo Electrónico</h3>
                  <p className="text-gray-600">
                    <a href="mailto:contacto@vivepuntarenasazul.org" className="hover:text-cyan-600">
                      contacto@vivepuntarenasazul.org
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-cyan-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Teléfono</h3>
                  <p className="text-gray-600">
                    <a href="tel:+50612345678" className="hover:text-cyan-600">
                      +506 1234 5678
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-cyan-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Horario de Atención</h3>
                  <p className="text-gray-600">
                    Lunes a Viernes: 9:00 AM - 5:00 PM
                    <br />
                    Sábados: 9:00 AM - 12:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-cyan-700">Síguenos en Redes Sociales</h2>

            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-cyan-100 p-4 rounded-full hover:bg-cyan-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-cyan-600" />
              </a>
              <a
                href="#"
                className="bg-cyan-100 p-4 rounded-full hover:bg-cyan-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-cyan-600" />
              </a>
              <a
                href="#"
                className="bg-cyan-100 p-4 rounded-full hover:bg-cyan-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6 text-cyan-600" />
              </a>
            </div>
          </div>

          <div className="bg-cyan-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">¿Quieres ser voluntario?</h3>
            <p className="text-gray-600 mb-4">
              Estamos siempre en busca de personas comprometidas con la conservación marina. Marca la casilla en el
              formulario de contacto y te enviaremos información sobre nuestras próximas actividades y cómo puedes
              participar.
            </p>
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
              <a href="#formulario">Unirse como Voluntario</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
