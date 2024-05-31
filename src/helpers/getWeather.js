import axios from "axios" //Es para hacer una peticion a la API

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=40.8976&longitude=-74.016&current=temperature_2m&timezone=auto&forecast_days=1'

export const getTemperatura = async () => {
    const respuesta = await axios.get(API_URL);
    const nuevaTemperatura = respuesta.data.current.temperature_2m;
    return nuevaTemperatura
}