<template>
  <div class="container">
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />
    <span v-if="mensaje.nombre">{{ mensaje.nombre }}</span>
    <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />
    <span v-if="mensaje.apellido">{{ mensaje.apellido }}</span>
    <label for="id_edad">Edad:</label>
    <input v-model="nuevoEdad" id="id_edad" type="text" />
    <label for="id_nacional">nacionalidad:</label>
    <input v-model="nuevoNacionalidad" id="id_nacional" type="text" />
    <label for="id_cedula">cedula:</label>
    <input v-model="nuevoCedula" id="id_cedula" type="text" />

    <button v-on:click="agregarEstudiante()">Agregar</button>
    <button v-on:click="obtenerPathVariable()">Obtener ES</button>
    {{ nuevoNombre }}
    <ul>
      <li
        v-for="{ nombre, apellido, edad, nacionalidad, cedula } in lista"
        :key="nombre"
      >
        Nombre: {{ nombre }} - Apellido: {{ apellido }} - Edad:{{ edad }} -
        nacionalidad:{{ nacionalidad }} - Cedula:{{ cedula }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: "",
      lista: [
        { nombre: "Erick", apellido: "Enriquez" },
        { nombre: "danilo", apellido: "parrales" },
        { nombre: "carlos", apellido: "segovia" },
        { nombre: "jessica", apellido: "teran" },
        { nombre: "ana", apellido: "castillo" },
      ],
      mostrar: false,
      nombreMensaje: false,
      apellidoMensaje: false,
      mensaje: {
        nombre: null,
        apellido: null,
      },
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        edad: this.nuevoEdad,
        nacionalidad: this.nuevoNacionalidad,
        cedula: this.nuevoCedula,
      };
      /*this.lista.unshift(nuevo);*/
      this.lista.push(nuevo);
    },
    obtenerPathVariable() {
      const cedula = this.$route.params.cedula;
      console.log(cedula);
      const anio = this.$route.query.anio;
      console.log(anio);
      const mes = this.$route.query.mes;
      console.log(mes);
    },
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
    const cedula = this.$route.params.cedula;
      console.log(cedula);
      const anio = this.$route.query.anio;
      console.log(anio);
      const mes = this.$route.query.mes;
      console.log(mes);
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },

};
</script>

<style scoped>
.container {
  background: #ffffff;
  border: 1px solid;
  border-radius: 12px;
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
}

label {
  display: block;
  color: #333;
  text-align: left;
}

input {
  background: #4e91f9;
  color: #fff;
  width: 80%;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 20px 85px;
}

button {
  background: #313bb9;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  width: 100px;
}

ul {
  list-style: none;
  margin-top: 50px;
}

li {
  background: #dba237;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  color: #333;
  font-size: 20px;
}
</style>