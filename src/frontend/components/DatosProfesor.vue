<template lang="pug">
  .datosProfesor
    img.imagen(:src="obtenerImagen(profesor)")
    .campos
      p <span class="titulo">Nombre: </span> <span class="campo">{{ profesor.nombre }}</span>
      p <span class="titulo">Correo: </span> <span class="campo">{{ profesor.correo }}</span>
      p <span class="titulo">Teléfono: </span> <span class="campo">{{ profesor.telefono }}</span>
</template>

<script>
export default {
  props: { profesor: Object },
  methods: {
    obtenerImagen(profesor) {
      const procesarNombre = nombre => nombre.toLowerCase()
        .split(' ')
        .join('')
        .replace('á', 'a')
        .replace('é', 'e')
        .replace('í', 'i')
        .replace('ó', 'o')
        .replace('ú', 'u')

      return profesor.imagen || `img/${procesarNombre(profesor.nombre)}.jpeg`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../resources/style/style";

.datosProfesor {
  display: flex;
  margin-bottom: 1em;
}

.campos {
  display: flex;
  flex-direction: column;

  p {
    margin: 0.05em;
  }
}

.imagen {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 1em;
}

.campo {
  color: $dark;
}
</style>
