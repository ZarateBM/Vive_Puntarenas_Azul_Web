"use client";
import { useState, useEffect } from "react";

interface Evento {
  id: number;
  titulo: string;
  fecha: string;
  hora: string;
  lugar: string;
  descripcion: string;
  tipo: string;
  imagen: string;
  participantes: number;
}

export const useEventos = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventos = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://gray-gnat-361867.hostingersite.com/api-rest/eventos/listar.php"
        );

        if (!response.ok) {
          throw new Error("Error al obtener los eventos");
        }

        const data = await response.json();
        setEventos(data);
      } catch (err: any) {
        setError(err.message || "Ocurrió un error inesperado");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventos();
  }, []);

  return { eventos, isLoading, error };
};