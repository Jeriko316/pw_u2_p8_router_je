// src/clients/ApiMatricula.js
import axios from "axios";

const API_URL = "http://localhost:8081/api/matricula/v1/estudiantes"; // ✅ Usa HTTP, no HTTPS

// Obtener todos los estudiantes
const obtenerTodosLosEstudiantes = async () => {
  try {
    const respuesta = await axios.get(API_URL); // ✅ Aquí va la petición real
    return respuesta.data;
  } catch (error) {
    console.error("Error al obtener estudiantes:", error);
    throw error;
  }
};

// Obtener estudiante por ID
const obtenerEstudiantePorId = async (id) => {
  try {
    const respuesta = await axios.get(`${API_URL}/${id}`);
    return respuesta.data;
  } catch (error) {
    console.error(`Error al obtener estudiante con id ${id}:`, error);
    throw error;
  }
};

// Fachadas exportables
export const obtenerTodosFachada = async () => {
  return await obtenerTodosLosEstudiantes();
};

export const obtenerPorIdFachada = async (id) => {
  return await obtenerEstudiantePorId(id);
};
