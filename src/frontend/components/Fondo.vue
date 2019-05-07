<template lang="pug">
  .logos(:class="{ esObscuro }")
    i.fa-2x(v-for="icono in coleccionIconos", 
      :class="[icono.clase, esObscuro ? 'esObscuro' : '', icono.tipo || 'fas']", 
      :style="computarEstilo(icono)")
</template>

<script>
export default {
  props: { 
    tipo: String, 
    esObscuro: { type: Boolean, default: false } 
  },
  computed: {
    coleccionIconos() {
      switch(this.tipo) {
        case 'alumno': 
          return [
            { clase: 'fa-book', region: [1, 2] },
            { clase: 'fa-graduation-cap', region: [2, 7] },
            { clase: 'fa-basketball-ball', region: [5, 7] },
            { clase: 'fa-bicycle', region: [10, 4] },
            { clase: 'fa-bus', region: [10, 10] },
            { clase: 'fa-calculator', region: [1, 10] },
            { clase: 'fa-diaspora', tipo: 'fab', region: [4, 4] },
            { clase: 'fa-cut', region: [10, 1] },
            { clase: 'fa-drafting-compass', region: [6, 1] },
            { clase: 'fa-flask', region: [8, 7] },
            { clase: 'fa-laptop', region: [4, 2] },
            { clase: 'fa-pen', region: [6, 3] },
          ]
        case 'profesor':
          return [
            { clase: 'fa-book', region: [3, 6] },
            { clase: 'fa-chalkboard', region: [7, 9] },
            { clase: 'fa-briefcase', region: [10, 4] },
            { clase: 'fa-desktop', region: [4, 4] },
            { clase: 'fa-glasses', region: [4, 8] },
            { clase: 'fa-bell', region: [7, 6] },
            { clase: 'fa-book-open', region: [1, 8] },
            { clase: 'fa-brain', region: [9, 1] },
            { clase: 'fa-microscope', region: [1, 2] },
            { clase: 'fa-divide', region: [10, 8] },
            { clase: 'fa-calendar', region: [4, 1] },
          ]
      }
    }
  },
  methods: {
    computarEstilo(icono) {
      return `grid-row: ${icono.region[1]}; grid-column: ${icono.region[0]};` +
             ` transform: rotate(${icono.rotacion || 0}deg);`
    }
  }
}
</script>

<style lang="scss" scoped>
$cantidadCeldas: 10;
$porcentajePorCelda: 100% / $cantidadCeldas;

i.esObscuro {
  color: white;
}

.logos {
  opacity: 0.15;

  &.esObscuro {
    opacity: 0.08;
  }

  pointer-events: none;

  height: 70vh;
  width: 70vh;

  display: grid;
  grid-template-columns: repeat($cantidadCeldas, $porcentajePorCelda);
  grid-template-rows: repeat($cantidadCeldas, $porcentajePorCelda);

  align-self: center;
  justify-self: center;
}
</style>
