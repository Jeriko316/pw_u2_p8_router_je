<template>
  <PokemonImage :pokemonId="11" :mostrarImagen="false" />
  <PokemonOptions :pokemons="vectorPokemon" />
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import { obtenerOpcionesFachada } from "@/clients/PokemonClient";
export default {
    data(){
        return{
             vectorPokemon: [],
        };
    },
  components: {
    PokemonImage,
    PokemonOptions,
  },
  methods: {
    async iniciarJuego() {
      const opciones = await obtenerOpcionesFachada(4);
      this.vectorPokemon=opciones;
      console.log(this.vectorPokemon);
    },
  },
  mounted() {
    this.iniciarJuego();
  },
};
</script>

<style>
</style>