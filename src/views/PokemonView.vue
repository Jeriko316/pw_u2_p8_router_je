<template>
 
  <PokemonImage :pokemonId="11" :mostrarImagen="false"/>
  <PokemonOptions  />
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
export default {
  components: {
    PokemonImage,
    PokemonOptions,
  },
};
</script>

<style>

</style>