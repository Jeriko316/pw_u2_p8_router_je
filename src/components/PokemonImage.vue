<template>
     <h3>{{ mensaje1 }}</h3>
  <div class="image-container">
    <img v-if="!mostrarImagen" class="ocultar"
      :src="imagenFuente"
      alt="No se puede renderizar pokemon">
    <img v-if="mostrarImagen" :src="imagenFuente" alt="No se puede renderizar pokemon">
 
  </div>
</template>
 
<script>
export default {
  props: {
    pokemonId:{
      type: Number,
      required: true,
    },
    mostrarImagen:{
      type: Boolean,
      required: true,
      default:  false,
    },
  },
  data() {
    return {
      mensaje1:'mensaje1'
    }
  },
  computed: {
    imagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    }
  },
}
</script>
 
<style>
img {
  height: 200px;
  position: absolute;
  right: 42%;
}
 
.ocultar {
  filter: brightness(0);
}
 
.image-container {
  height: 200px;
}
</style>