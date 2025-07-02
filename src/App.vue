<template>
  
  <BuscarEstudianteView/>
  
</template>
<script>
//import Estudiante from '@/components/Estudiante.vue';
//import PokemonView from "@/views/PokemonView.vue";
//import ResponsivoView from "@/views/ResponsivoView.vue";
import ApiMatriculaView from "@/views/ApiMatriculaView.vue"
import BuscarEstudianteView from "@/views/BuscarEstudianteView.vue"

export default {
  name: "App",
  components: {
  
    BuscarEstudianteView
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
 
 