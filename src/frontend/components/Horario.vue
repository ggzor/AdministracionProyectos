<template lang="pug">
  main.area
    .encabezado
      img.logo(src="../resources/buap.png" alt="Logo de la BUAP.")
      h1 Horarios
    .horario(v-if="cargado")
      DatosProfesor(:profesor="profesor")
      VistaHorario(:horario="profesor.horario", :editable="false", @eliminar="eliminar")
    Informacion(:siempreVisible="true")
</template>

<script>
import DatosProfesor from './DatosProfesor'
import Informacion from './Informacion.vue'
import VistaHorario from './VistaHorario.vue'

import axios from 'axios'

export default {
  components: { DatosProfesor, Informacion, VistaHorario },
  data() {
    return {
      cargado: false,
      profesor: null
    }
  },
  methods: {
    eliminar (actividad) {
      const indice = this.profesor.horario.findIndex(
        a => a.nombre === actividad.nombre && a.dia === actividad.dia && a.inicio === actividad.inicio && a.fin === actividad.fin
      )

      if (indice !== -1)
        this.profesor.horario.splice(indice, 1)
    }
  },
  mounted() {
    const match = window.location.href.match(/\?id=(\d+)/)

    if (match) {
      const id = Number(match[1])

      axios.get(`/v1/profesor?id=${id}`)
        .then(res => {
          this.profesor = res.data
          this.cargado = true
        })
        .catch(err => { console.error('No se pudo cargar al profesor') })
    }
  },
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

$medidaLogo: 64px;

.encabezado {
  align-self: flex-start;
  justify-self: flex-start;

  display: flex;
  align-items: center;

  color: $dark;

  h1 {
    color-adjust: exact;
    color: $dark !important;
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
  .logo {
    margin: 1em;
  }
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

main {
  height: 100vh;
}

.horario {
  margin: 15vh 2em 0 2em;
  display: flex;
  flex-direction: column;
}

</style>
