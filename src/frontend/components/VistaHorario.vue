<template lang="pug">
  .vistaHorario
    .horarioVacio(v-if="horario.length === 0")
      .mensajeVacio No hay materias registradas en el horario
    .horario-interno(v-else)
      .relleno(v-for="_ in relleno")
      .encabezado(v-for="encabezado in encabezados")
        .textoEncabezado {{ encabezado }}
      .hora(v-for="(hora, indice) in horas", :style="computarEstiloHora(indice)")
        div {{ hora }}
      .actividad(v-for="actividad in actividades", :style="computarEstiloActividad(actividad)")
        div {{ actividad.actividad }} 
</template>

<script>
export default {
  props: { horario: Array },
  computed: {
    horaMinima() {
      return this.horario.map(h => h.inicio).reduce((x, y) => Math.min(x, y))
    },
    horaMaxima() {
      return this.horario.map(h => h.fin).reduce((x, y) => Math.max(x, y))
    },
    encabezados() {
      return ['Horario', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
    },
    horas() {
      if (this.horario.length === 0)
        return []

      const lista = []

      for (let i = this.horaMinima; i < this.horaMaxima; i++) {
        const inicio = ('00' + i).slice(-2)
        const fin = ('00' + (i + 1)).slice(-2)
        lista.push(`${inicio}:00 - ${fin}:00`)
      }      

      return lista
    },
    actividades() {
      const l =  [
        { actividad: 'Estructuras de datos', color: '#F44336', dia: 3, inicio: 0, fin: 1 },
        { actividad: 'Cálculo', color: '#4CAF50', dia: 5, inicio: 1, fin: 3 }
      ]

      const resultado = []

      for (let actividad of this.horario) {
        resultado.push({ 
          actividad: actividad.nombre, 
          dia: actividad.dia, 
          inicio: actividad.inicio - this.horaMinima,
          fin: actividad.fin - this.horaMinima,
          color: this.colorParaActividad(actividad.nombre)
        })
      }

      return resultado
    },
    relleno() {
      const lista = []

      const cantidad = this.encabezados.length * (this.horas.length + 1) 
        - this.encabezados.length 
        - this.horas.length 
        - this.actividades.map(a => a.fin - a.inicio).reduce((x, y) => x + y, 0)

      for (let i = 0; i < cantidad; i++) {
        lista.push('')
      }

      return lista
    },
    actividadesDistintasOrdenadas() {
      let objeto = {}
      let resultado = []

      for (let actividad of this.horario) {
        if (!objeto[actividad.nombre])
          objeto[actividad.nombre] = true
      }

      for (let nombre in objeto) {
        resultado.push(nombre)
      }

      return resultado.sort()
    }
  },
  methods: {
    computarEstiloHora(indice) {
      return `grid-row: ${indice + 2};`
    },
    computarEstiloActividad(actividad) {
      return `grid-column: ${actividad.dia + 1}; grid-row: ${actividad.inicio + 2} / ${actividad.fin + 2};`
           + `background-color: ${actividad.color} !important;`
    },
    colorParaActividad(actividad) {
      const colores = ['#EF5350', '#42A5F5', '#5C6BC0', '#66BB6A', '#FFA726', '']

      return colores[this.actividadesDistintasOrdenadas.indexOf(actividad)]
    }
  }
}
</script>

<style lang="scss" scoped>

.encabezado {
  grid-row: 1;
}

.relleno {
  border: 1px solid #e5e5e5;
}

.horario-interno {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

.hora {
  grid-column: 1;
  display: flex;
  align-items: center;
  border: 1px solid #e5e5e5;
  padding: 0.25em;
}

.actividad {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.5em;

  justify-content: center;

  -webkit-print-color-adjust: exact !important; 
  color-adjust: exact !important;

  div {
    -webkit-print-color-adjust: exact !important; 
    color-adjust: exact !important;
    color: white !important;
  }
}

</style>
