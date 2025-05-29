<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ numero }} <sup>2</sup>={{ calcularCuadrado }}</p>
    <!--<p>{{ numero }} <sup>2</sup>={{ calcularCuadrado }}</p>
    <p>{{ numero }} <sup>2</sup>={{ calcularCuadrado }}</p>
    <p>{{ numero }} <sup>2</sup>={{ calcularCuadrado }}</p>
    <p>{{ numero }} <sup>2</sup>={{ calcularCuadrado }}</p>-->
    <div>
      <button v-on:click="incrementar()">+1</button>
      <button @click="decrementar()">-1</button>
    </div>
    <!--<p>{{ numero }}</p>
    <p>{{ numero+1 }}</p>
    <p>{{ activo }}</p>
    <p>{{ usuario.edad }}</p>
    <p>{{ arreglo }}</p>
    1+1
    {{ 1 + 1 }}
    true ? 'es verdadero' : 'es falso'
    {{ true ? "es verdadero" : "es falso" }}-->
  </div>
</template>

<script>
export default {
  /*props: ["title", "value"],*/
  props: {
    title: String,
    value: {
      type: Number,
      required: false,
      default: 100,
      validator(value) {
        return value > 0;
      },
    },
    p1: Boolean,
    p2: Array,
    p3: Object,
    p4: Function,
    p5: Date,
    p6: Symbol,
  },
  data() {
    return {
      numero: this.value,
      titulo: "Contador",
      activo: true,
      usuario: {
        nombre: "erick enriquez",
        edad: 35,
        genero: "masculino",
      },
      arreglo: ["amarillo", "azul"],
    };
  },
  methods: {
    calcularCuadrado() {
      console.log("entro al metodo");
      return numero * numero;
    },
    incrementar() {
      this.numero++;
    },
    decrementar() {
      this.numero--;
    },
  },
  computed: {
    calCuadrado() {
      console.log("entro al propiedad computada");
      return numero * numero;
    },
  },
  created() {
    if (this.value > 0) {
      console.log("eS CORRECTO");
    } else {
      throw new Error("Error el valor no puede ser menor que cero");
    }
  },
};
</script>

<style>
h1 {
  background: yellow;
}
</style>