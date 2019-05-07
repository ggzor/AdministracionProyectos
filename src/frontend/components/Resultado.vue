<template lang="pug">
  .resultado(@click="$emit('click')")
    i.icono.fas.fa-lg(:class="profesor.sexo == 'Masculino' ? 'fa-male' : 'fa-female'")
    div {{ profesor.nombre }}
</template>

<script>
export default {
  props: { profesor: Object }
}
</script>

<style lang="scss" scoped>
.resultado {
  width: 100%;
  border: 1px solid #e5e5e5;
  user-select: none;

  display: flex;
  padding: 1em;

  &:hover {
    background-color: #e5e5e5;
  }
}

.icono {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center; 
  margin-right: 0.5em;
}
</style>
