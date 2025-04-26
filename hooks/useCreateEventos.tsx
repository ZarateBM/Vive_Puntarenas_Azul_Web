import axios from "axios";
import { useState } from "react";

interface crearEventoData {
    titulo: string;
    fecha: string;
    hora_inicio: string;
    hora_fin: string;
    categoria: string;
    lugar: string;
    descripcion: string;
    tipo: string;
    participantes: string;
}

export const useCrearEvento = () => { 
    const [isSubmitting, setIsSubmitting] = useState(false); 
    const [error, setError] = useState <string | null> (null); 

    const crearEvento = async(data:crearEventoData, file:File) => {


        setIsSubmitting(true); 
        setError(null); 
        try {
            const formData = new FormData();
            
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });

            formData.append("imagen", file);

            const response = await axios.post(
                "https://gray-gnat-361867.hostingersite.com/api-rest/eventos/crear.php", 
                formData, 
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
                setError("Ocurrió un error inesperado al crear el evento"); 
            }

        } finally {
            setIsSubmitting(false); 
        }
        
    };
    return {isSubmitting, error, crearEvento};
}; 

