<template lang="pug">
  main
    .area.esPrimera
      .encabezado
        img.logo(src="../resources/buap.png" alt="Logo de la BUAP.")
        h1 Horarios
      MenuAlumno
      Informacion
    .area.esSegunda
      MenuProfesor
      Informacion(:esObscura="true")
</template>

<script>
import Informacion from './Informacion.vue'
import MenuAlumno from './MenuAlumno.vue'
import MenuProfesor from './MenuProfesor.vue'

export default {
  components: { Informacion, MenuAlumno, MenuProfesor }
}
</script>

<style lang="scss">
@import "../resources/style/style";

* {
  box-sizing: border-box;
  font-family: sans-serif;
}

html, body {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

main {
  grid-area: center;

  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100vh;
  grid-template-areas: 'primera segunda';
}

.area {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  grid-template-areas: 'centro';

  > * {
    grid-area: centro;
  }
}

$medidaLogo: 64px;

.encabezado {
  align-self: flex-start;
  justify-self: flex-start;

  display: flex;
  align-items: center;

  color: $dark;

  h1 {
    color: $dark;
    font-weight: bold;
    margin: 0;
  }
}

.logo {
  width: $medidaLogo;
  height: $medidaLogo;
  margin: 1em 2em;
}

@media all and (max-width: 960px) {
  main {
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, 100vh);
    grid-template-areas: 'primera' 'segunda';
  }

  .logo {
    margin: 1em;
  }
}
</style>
