<template>
  <div class="container">
    <h1>Listado de Estudiantes</h1>
    <button @click="consultarEstudiantes">Consultar</button>

    <table border="2" class="table table-striped" v-if="lista.length > 0">
      <thead>
        <tr>
          <th>Id</th>
            <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha Nacimiento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(est, index) in lista" :key="index">
          <td>{{ est.id }}</td>
          <td>{{ est.nombre }}</td>
          <td>{{ est.apellido }}</td>
          <td>{{ est.fechaNacimiento }}</td>
        </tr>
      </tbody>
    </table>

    <div v-else>
      <p>No hay estudiantes aún. Haz clic en "Consultar".</p>
    </div>
  </div>
</template>

<script>
import { obtenerTodosFachada } from "@/clients/ApiMatricula";

export default {
  data() {
    return {
      lista: [],
    };
  },
  methods: {
    async consultarEstudiantes() {
      try {
        this.lista = await obtenerTodosFachada(); // ✅ Aquí sí usas la función que importaste
      } catch (err) {
        alert("No se pudo consultar estudiantes");
        console.error(err);
      }
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
