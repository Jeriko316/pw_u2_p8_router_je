<template>
    {{ mensaje2 }}
  <div class="options-container">
  
    <ul>
      <li
        @click="comunicarClick(pokemon.id)"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
      >
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      mensaje2: "mensaje2",
    };
  },
  methods: {
    comunicarClick(id) {
      console.log("click.....");
      console.log(id);
      const objetoEnviado = {
        atributo1: id,
        atributo2: "Erick",
        atributo3: true,
      };
      this.$emit(
        "seleccionado",
        objetoEnviado
      ); /*sirve para emitir un comuicado a su padre*/
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
}

li {
  background: white;
  border-radius: 5px;
  border: 1px solid rgb(0, 0, 0, 2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

.options-container {
  display: flex;
  justify-content: center;
}

li:hover {
  background: rgb(0, 0, 0, 0.1);
}
</style>