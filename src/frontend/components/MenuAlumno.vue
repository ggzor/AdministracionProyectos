<template lang="pug">
  .alumno#alumno
    .area.interfaz
      Fondo(tipo="alumno")
      .inicio
        .interaccion
          h3 Buscar el horario de un profesor
          input.uk-input.entrada(
            type="text", placeholder="Nombre del profesor",
            @focus="mostrarResultados = true", @blur="ocultarResultados")
        .cargador.lds-ellipsis(v-if="cargandoResultados")
          div 
          div
          div
        .mensajeError(v-if="hayError") 
          div No hay profesores que cumplan <br> con el criterio de búsqueda
        .tarjeta(v-if="mostrarResultados")
          Resultado(@click="elegirProfesor('XD')", :profesor="{ nombre: 'Omar Cortés Ortega' }")
    Navegacion(
      titulo="Soy profesor", 
      href="#profesor",
      icono="fa-chevron-down" 
      :esObscuro="true")
</template>

<script>
import Fondo from './Fondo.vue'
import Navegacion from './Navegacion.vue'
import Resultado from './Resultado'

export default { 
  components: { Fondo, Navegacion, Resultado },
  data() {
    return {
      cargandoResultados: false,
      mostrarResultados: false,
      hayError: false
    }
  },
  methods: {
    elegirProfesor(profesor) {
      console.log('Elegido', profesor)
      this.mostrarResultados = false
    },
    ocultarResultados() {
      setTimeout(() => this.mostrarResultados = false, 200)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../resources/style/style";

.alumno {
  transition: box-shadow 400ms;
  color: darken($color: $dark, $amount: 1);

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  grid-template-areas: 'centro';
}

.interfaz {
  grid-area: centro;

  align-items: center;
  justify-content: center;
}

h3 {
  color: $dark;
}

.inicio {
  display: grid;
  align-self: stretch; 

  grid-template-columns: 100%;
  grid-template-rows: 40% auto auto 1fr;
}

.interaccion {
  grid-row: 2;
  justify-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

$anchoMaximo: 350px;

.tarjeta {
  z-index: 1;
  grid-column: 1;
  grid-row: 3;
  width: 60vw;
  max-width: $anchoMaximo;

  background-color: white;

  align-self: center;
  justify-self: center;
}

.entrada {
  width: 60vw;
  max-width: $anchoMaximo;
  border-radius: 5px;
  border-width: 2px;
  border-color: rgba($color: $dark, $alpha: 0.7);
  color: $dark;
  background-color: white;
}

.alumno:hover {
  box-shadow: 10px 0 10px -4px rgba(0, 0, 0, 0.4);
}

.cargador {
  grid-column: 1;
  grid-row: 3;
  justify-self: center;
  
  div {
    background: $dark;
  }
}

.mensajeError {
  grid-column: 1;
  grid-row: 3;
  justify-self: center;
  margin-top: 1em;
  text-align: center;

  color: $colorError;
}

</style>
