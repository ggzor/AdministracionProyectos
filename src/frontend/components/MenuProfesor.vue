<template lang="pug">
  .profesor#profesor
    .area.interfaz
      Fondo(tipo="profesor", :esObscuro="true")
      .inicio
        h3 Iniciar sesión como profesor
        input.uk-input.entrada(type="text", placeholder="Usuario")
        input.uk-input.entrada(type="password", placeholder="Contraseña")
        button.uk-button.boton Ingresar

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

.interfaz {
  grid-area: centro;
  align-items: center;
  justify-content: center;
}

.inicio {
  h3 {
    color: white;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 1em;
  }
}

.entrada {
  width: 60%;
  max-width: 300px;
  border-radius: 5px;
  border-width: 2px;
  border-color: rgba($color: $dark, $alpha: 0.75);
  color: white;
  background-color: rgba($color: white, $alpha: 0.15);

  &:focus {
    background-color: rgba($color: white, $alpha: 0.15);
    color: white;
  }

  &::placeholder {
    color:rgba($color: white, $alpha: 0.9)
  }
}

.boton {
  background-color: white;
  color: $dark;

  &:hover {
    background-color: rgba($color: white, $alpha: 0.8);
  }

  &:active {
    background-color: white;
  }
}

.profesor:hover {
  box-shadow: -10px 0 6px -4px rgba(0, 0, 0, 0.5);
}
</style>
