<template lang="pug">
  .cubierta
    main
      MenuAlumno
      MenuProfesor
    img.logo(src="../resources/buap.png" alt="Logo de la BUAP.")
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
  grid-area: center;

  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100vh;

  font-family: sans-serif;
}

.cubierta {
  display: grid;
  grid-template-areas: 'center';
}

$medidaLogo: 64px;

.logo {
  grid-area: center;

  width: $medidaLogo;
  height: $medidaLogo;
  margin: 1em 2em;
}

@media all and (max-width: 960px) {
  main {
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, 100vh);
  }
}
</style>
