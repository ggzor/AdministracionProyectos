<template lang="pug">
  .alumno#alumno
    .area.interfaz
      Fondo(tipo="alumno")
      .inicio
        .interaccion
          h3 Buscar el horario de un profesor
          input.uk-input.entrada(
            v-model="nombre",
            type="text", placeholder="Nombre del profesor",
            @focus="mostrarResultados = true", @blur="ocultarResultados")
        .cargador.lds-ellipsis(v-if="cargandoResultados")
          div 
          div
          div
        .mensajeError(v-if="mensajeError") 
          div {{ mensajeError }}
        .tarjeta(v-if="mostrarResultados && nombre.trim().length > 0")
          Resultado(v-for="profesor in resultados", 
            @click="elegirProfesor(profesor)",
            :key="profesor.nombre",
            :profesor="profesor")
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

import { from, Subject } from 'rxjs'
import { debounceTime, switchMap, tap, filter } from 'rxjs/operators'
import axios from 'axios'

export default { 
  components: { Fondo, Navegacion, Resultado },
  data() {
    return {
      nombre: '',
      cargandoResultados: false,
      mostrarResultados: false,
      mensajeExcepcion: '',
      hayError: false,
      resultados: [
        { id: 0, nombre: 'Omar Cortés Ortega' }
      ]
    }
  },
  computed: {
    mensajeError() {
      if (this.hayError) {
        return this.mensajeExcepcion
      } else {
        return ''
      }
    }
  },
  methods: {
    elegirProfesor(profesor) {
      window.location.href = `${window.location.origin}/horario?id=${profesor.id}`
      this.mostrarResultados = false
    },
    ocultarResultados() {
      setTimeout(() => this.mostrarResultados = false, 200)
    }
  },
  watch: {
    nombre(valor) {
      this.nombre$.next(valor)

      if (valor.trim().length == 0) {
        this.resultados = []
        this.hayError = false
      }
    }
  },
  mounted() {
    this.nombre$ = new Subject()

    this.subscription = this.nombre$.pipe(
      filter(s => s.trim().length > 0),
      debounceTime(500),
      tap(() => this.cargandoResultados = true),
      switchMap(valor => from(axios.get(`/v1/buscar?nombre=${valor.replace(' ', '$20')}`)))
    ).subscribe(
      resultado => {
        this.resultados = resultado.data
        this.hayError = false
        this.cargandoResultados = false

        if (this.resultados.length == 0) {
          this.hayError = true
          this.mensajeExcepcion = 'No hay profesores con ese nombre'
        }
      },
      err => {
        this.resultados = []
        this.hayError = true
        this.mensajeExcepcion = 'Ocurrió un error al procesar la solicitud.'
        this.cargandoResultados = false
      }
    )
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
