<template lang="pug">
  .resultado(@click="$emit('click')")
    img.imagen(:src="obtenerImagen(profesor)")
    div {{ profesor.nombre }}
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
.resultado {
  width: 100%;
  border: 1px solid #e5e5e5;
  user-select: none;

  display: flex;
  align-items: center;
  padding: 0.5em;

  &:hover {
    background-color: #e5e5e5;
  }
}

.imagen {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 1em;
}
</style>
