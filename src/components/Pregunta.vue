<template>
  <div class="container">
    <img v-if="imagen" :src="imagen"
      alt="No se pudo cargar"
    />
    <div class="container-2"></div>
    <div class="Pregunta-Container">
      <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
      <p>Recuerda terminar con un signo de pregunta (?)</p>
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
import { consultarRespuestaFachada } from "@/clients/YesNoClient";
export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      imagen:null,
    };
  },
  watch: {
    pregunta(value, oldValue) {
      console.log("valor actual: " + value);
      console.log("valor anterior: " + oldValue);
      //Aqui deberia Consultar la API
      this.consumirAPI();
    },
  },
  methods: {
    async consumirAPI() {
      const resp = await consultarRespuestaFachada();
      console.log(resp);
      console.log(resp.image);
      console.log(resp.asnwer);
      console.log(resp.forced);
      this.respuesta = resp.asnwer;
      this.imagen=resp.image;
    },
  },
};
</script>

<style scoped>
.container-2,
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
}

.container-2 {
  background-color: rgba(0, 0, 0, 0.9);
}

.Pregunta-Container {
  position: relative;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  margin-top: 70px;
}

input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 25px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 180px;
}
</style>