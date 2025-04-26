"use client";
import { useState, useEffect } from "react";
import axios from "axios";

interface Evento {
  id: number;
  titulo: string;
  fecha: string;
  hora: string;
  lugar: string;
  descripcion: string;
  categoria: string;
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
        const response = await axios.get(
          "https://gray-gnat-361867.hostingersite.com/api-rest/eventos/listar.php"
        );

        setEventos(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || err.message || "Ocurrió un error inesperado");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventos();
  }, []);

  return { eventos, isLoading, error };
};