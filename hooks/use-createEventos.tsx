import axios from "axios";
import { useState } from "react";

interface crearEventoData {
    titulo: string;
    fecha: string;
    horaInicio: string;
    horaFin: string;
    lugar: string;
    descripcion: string;
    tipo: string;
    participantesMax: string;
    imagen: File; 
}

export const useCrearEvento = () => { 
    const [isSubmitting, setIsSubmitting] = useState(false); 
    const [error, setError] = useState <string | null> (null); 

    const crearEvento = async(data:crearEventoData) => {
        setIsSubmitting(true); 
        setError(null); 
        try {
            const response = await axios.post(
                "https://gray-gnat-361867.hostingersite.com/api-rest/eventos/crear.php", 
                data, 
                {headers: {
                    "Content-Type":"multipart/form-data",
                },
                }
            );

            return response.data; 

        } catch (error) {
            if(error instanceof Error){
                setError(error.message || "Ocurrió un error al crear el evento"); 
            }
            else{
                setError("Ocurrió un error inseperado al crear el evento"); 
            }

        } finally {
            setIsSubmitting(false); 
        }
        
    };
    return {isSubmitting, error, crearEvento};
}; 

