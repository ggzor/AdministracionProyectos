<template lang="pug">
  .profesor#profesor
    .interfaz
      Fondo(tipo="profesor", :esObscuro="true")
      
    Navegacion(
      titulo="Soy alumno", 
      href="#alumno", 
      icono="fa-chevron-up"
      :esObscuro="false")
</template>

<script>
import Fondo from './Fondo.vue'
import Navegacion from './Navegacion.vue'

export default {
  components: { Fondo, Navegacion }
}
</script>

<style lang="scss" scoped>
@import "../resources/style/colors";

.profesor {
  background: $dark;
  color: whitesmoke;
  transition: box-shadow 400ms;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  grid-template-areas: 'centro';
}

.interfaz{
  grid-area: centro;

  display: flex;
  align-items: center;
  justify-content: center;
}

.profesor:hover {
  box-shadow: -10px 0 6px -4px rgba(0, 0, 0, 0.5);
}
</style>
