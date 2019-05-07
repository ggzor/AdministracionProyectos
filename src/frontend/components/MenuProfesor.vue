<template lang="pug">
  .profesor#profesor
    .area.interfaz
      Fondo(tipo="profesor", :esObscuro="true")
      .inicio
        h3 Iniciar sesión como profesor
        input.uk-input.entrada(v-model="usuario", type="text", placeholder="Usuario")
        input.uk-input.entrada(v-model="clave", type="password", placeholder="Contraseña")
        button.uk-button.boton(:disabled="!puedeIngresar", @click="ingresar")
          div Ingresar
    .cargador.lds-ellipsis(v-if="cargando")
      div
      div
      div
    .mensajeError(v-if="hayError") 
      div {{ mensajeError }}

    Navegacion(
      titulo="Soy alumno", 
      href="#alumno", 
      icono="fa-chevron-up"
      :esObscuro="false")
</template>

<script>
import Fondo from './Fondo.vue'
import Navegacion from './Navegacion.vue'
import axios from 'axios';

export default {
  components: { Fondo, Navegacion },
  data() {
    return {
      usuario: '',
      clave: '',
      cargando: false,
      hayError: false,
      mensajeError: 'La contraseña no es válida.'
    }
  },
  computed: {
    puedeIngresar() {
      return this.usuario.trim().length > 0 && this.clave.trim().length > 0
    }
  },
  methods: {
    ingresar() {
      this.cargando = true
      this.hayError = false

      axios.get(`/v1/autenticar?usuario=${this.usuario.replace(' ', '%20')}&clave=${this.clave.replace(' ', '%20')}`)
        .then(res => {
          if (res.data.valido) {
            window.location.href = `${window.location.origin}/editar?token=${res.data.token}`
          } else {
            this.cargando = false
            this.hayError = true
            this.mensajeError = res.data.error
          }
        })
        .catch(() => {
          this.cargando = false
          this.hayError = true
          this.mensajeError = 'Error al procesar solicitud'
        })
    }
  }
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

  &:hover(:not(:disabled)) {
    background-color: rgba($color: white, $alpha: 0.8);
  }

  &:active {
    background-color: white;
  }

  &:disabled {
    opacity: 0.5;
  }
}

.profesor:hover {
  box-shadow: -10px 0 6px -4px rgba(0, 0, 0, 0.5);
}

.cargador {
  grid-area: centro;
  align-self: flex-end;
  justify-self: center;
  margin-bottom: 22vh;

  div {
    background: white;
  }
}

.mensajeError {
  grid-area: centro;
  align-self: flex-end;
  justify-self: center;
  margin-bottom: 28vh;
  text-align: center;

  color: rgb(255, 83, 80);
  font-weight: bold;
}
</style>
