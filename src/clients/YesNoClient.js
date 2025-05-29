import axios from "axios";


const consultarRespuesta = () => {
    const respuesta = axios.get('https://yesno.wtf/api').then(rpt => rpt.data);
    console.log()
    return respuesta;
}

//Funciones fachada
export const consultarRespuestaFachada = async () => {
    return await consultarRespuesta();
}

