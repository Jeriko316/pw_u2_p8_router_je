import axios from "axios";

const obtenerPerro = () => {
  const respuesta = axios.get("https://dog.ceo/api/breeds/image/random")
    .then(rpt => rpt.data);
  return respuesta;
};

export const obtenerPerroFachada = async () => {
  return await obtenerPerro();
};
