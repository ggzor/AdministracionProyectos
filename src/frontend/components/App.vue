<template lang="pug">
  main
    MenuAlumno
    MenuProfesor
</template>

<script>
import MenuAlumno from './MenuAlumno.vue'
import MenuProfesor from './MenuProfesor.vue'

export default {
  components: { MenuAlumno, MenuProfesor }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}

main {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100vh;

  font-family: sans-serif;
}

@media all and (max-width: 960px) {
  main {
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, 100vh);
  }
}
</style>
