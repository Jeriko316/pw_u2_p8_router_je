<template>
  <div class="container">
    <h2>Buscar Estudiante por ID</h2>

    <input v-model="idBuscar" type="number" placeholder="Ingrese ID del estudiante" />
    <button @click="consultarEstudiante">Buscar</button>

    <div v-if="estudiante">
      <h3>Datos del Estudiante</h3>
      <form>
        <label>Id:</label>
        <input type="text" v-model="estudiante.id" readonly />

        <label>Nombre:</label>
        <input type="text" v-model="estudiante.nombre" readonly />

        <label>Apellido:</label>
        <input type="text" v-model="estudiante.apellido" readonly />

        <label>Fecha Nacimiento:</label>
        <input type="text" v-model="estudiante.fechaNacimiento" readonly />
      </form>
    </div>

    <div v-if="error">
      <p style="color: red">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { obtenerPorIdFachada } from "@/clients/ApiMatricula";

export default {
  data() {
    return {
      idBuscar: "",
      estudiante: null,
      error: null,
    };
  },
  methods: {
    async consultarEstudiante() {
      try {
        this.error = null;
        this.estudiante = await obtenerPorIdFachada(this.idBuscar);
      } catch (err) {
        this.estudiante = null;
        this.error = "No se encontró el estudiante con ese ID.";
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 50px auto;
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  border: 1px solid #ddd;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
