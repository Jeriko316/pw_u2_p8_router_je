<template>
  <div class="image-container">
    <img class="ocultar" :src="imagenFuente" alt="" />

    <img v-if="mostrar" :src="imagenFuente" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      require:true,
    },
    mostrarImagen: {
      type: Boolean,
      require: true,
      default: false,
    },
  },

  data() {
    return {
      mostrar: this.mostrarImagen,
    };
  },
  computed: {
    imagenFuente() {
      return `//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
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