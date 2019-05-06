<template lang="pug">
  .alumno#alumno
    .area.interfaz
      Fondo(tipo="alumno")
      .inicio
        h3 Buscar el horario de un profesor
        input.uk-input.entrada(type="text", placeholder="Nombre del profesor")
    Navegacion(
      titulo="Soy profesor", 
      href="#profesor",
      icono="fa-chevron-down" 
      :esObscuro="true")
</template>

<script>
import Fondo from './Fondo.vue'
import Navegacion from './Navegacion.vue'

export default { 
  components: { Fondo, Navegacion }
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.entrada {
  width: 60%;
  border-radius: 5px;
  border-width: 2px;
  border-color: rgba($color: $dark, $alpha: 0.7);
  color: $dark;
  background-color: white;
}

.alumno:hover {
  box-shadow: 10px 0 10px -4px rgba(0, 0, 0, 0.4);
}
</style>
