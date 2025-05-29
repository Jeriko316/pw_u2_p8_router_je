<template>
  <div class="container">
      <div v-show="mostrar">
        <h1> CIUDADANO GUARDADO CON EXITO</h1>
    </div>
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />
       <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />
     <label for="id_edad">Edad:</label>
    <input v-model="nuevoEdad" id="id_edad" type="text" />
      <label for="id_nacional">nacionalidad:</label>
    <input v-model="nuevoNacionalidad" id="id_nacional" type="text" />
      <label for="id_cedula">cedula:</label>
    <input v-model="nuevoCedula" id="id_cedula" type="text" />
    
    <button v-on:click="agregarEstudiante()">Agregar</button>
    {{ nuevoNombre }}
    
    <table border="2" class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>edad</th>
           <th>Nacionalidad</th>
          <th>Accion</th>
         
        </tr>
      </thead>
      <tbody>
        <tr v-for="{nombre, apellido, edad, nacionalidad,} in lista" :key="nombre">
          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
          <td>{{ edad }}</td>
          <td>{{ nacionalidad }}</td>
          <td><Button>Ver</Button></td>
        </tr>
      </tbody>
    </table>


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
    };
  },
  methods: {
    agregarEstudiante() {
        const nuevo={
            nombre:this.nuevoNombre,
            apellido:this.nuevoApellido,
            edad: this.nuevoEdad,
            nacionalidad:this.nuevoNacionalidad,
            cedula: this.nuevoCedula,
        }
        /*this.lista.unshift(nuevo);*/
        this.lista.push(nuevo);
        this.mostrar=true;
        this.nombre = null;

        setTimeout(()=>{this.mostrar=false;},3000);
    },
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


table {

  width: 100%;

  border-collapse: separate;

  border-spacing: 0;

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  font-size: 0.95rem;

  background-color: #fff;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);

  border-radius: 8px;

  overflow: hidden;

}
 
thead {

  background-color: #f4f6f8;

}
 
thead th {

  text-align: left;

  padding: 15px;

  color: #333;

  font-weight: 600;

  border-bottom: 2px solid #e3e6ea;

}
 
tbody tr {

  transition: background-color 0.2s;

}
 
tbody tr:nth-child(even) {

  background-color: #f9fafb;

}
 
tbody tr:hover {

  background-color: #eef3f9;

}
 
tbody td {

  padding: 15px;

  border-bottom: 1px solid #e3e6ea;

  color: #444;

}

 

</style>