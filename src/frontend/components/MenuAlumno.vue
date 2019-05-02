<template lang="pug">
  .alumno
    .interfaz
      h1 Alumno
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.alumno {
  transition: box-shadow 400ms;
  color: darken($color: #00395E, $amount: 1);

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  grid-template-areas: 'centro';
}

.interfaz {
  grid-area: centro;

  display: flex;
  align-items: center;
  justify-content: center;
}

.alumno:hover {
  z-index: 1;
  box-shadow: 10px 0 10px -4px rgba(0, 0, 0, 0.4);
}
</style>
