import axios from "axios";

export const fetchApiAdopcion = async () => {
    try {
        const { data } = await axios.get('https://huachitos.cl/api/animales/');
        console.log("Datos recibidos:", data);

        if (!data) throw new Error('Error al intentar traer los datos solicitados');

        return data; // Asegúrate de devolver el data correctamente
    } catch (error) {
        throw new Error('Error al intentar traer el animalito elegido: ' + error.message);
    }
}

