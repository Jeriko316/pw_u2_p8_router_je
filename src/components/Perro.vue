<template>
  <div class="contenedor">
    <button @click="cargarPerro">🐾 Mostrar un perro aleatorio 🐾</button>
    <div v-if="imagen" class="imagen-contenedor">
      <img :src="imagen" alt="perrito" />
    </div>
  </div>
</template>

<script>
import { obtenerPerroFachada } from "@/clients/PerroClient";
export default {
  data() {
    return {
      imagen: null,
    };
  },
  methods: {
    async cargarPerro() {
      const respuesta = await obtenerPerroFachada();
      this.imagen = respuesta.message;
    },
  },
};
</script>

<style scoped>
.contenedor {
  text-align: center;
  margin-top: 100px;
}

button {
  padding: 15px 25px;
  background-color: #4caf50;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.imagen-contenedor {
  margin-top: 30px;
}

img {
  width: 300px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
