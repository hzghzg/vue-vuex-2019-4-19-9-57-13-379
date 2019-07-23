<template>
  <div id="Header" class="header">
    <h2>To Do List</h2>
    <p class="desc">Simple Todo List with adding and filter by diff status.</p>
  </div>
</template>

<script>

export default {
  name: 'Header',
  components: {
  }
}
</script>

<style>
.header{
  text-align: left;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.desc{
  font-style: italic;
}
</style>