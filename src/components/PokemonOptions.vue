<template>
  <div class="options-container">
    <ul>
        <li>Pokemon 1</li>
        <li>Pokemons 2</li>
        <li>Pokemon 3</li>
        <li>Pokemosn 4</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>

    ul{
        list-style-type: none;
    }

    li {
        background: white;
        border-radius: 5px;
        border: 1px solid rgb(0,0,0,2);
        cursor: pointer;
        margin-bottom: 10px;
        width: 250px;
    }

    .options-container {
        display: flex;
        justify-content: center;
    }

    li:hover {
        background: rgb(0,0,0,0.1);
    }
</style>