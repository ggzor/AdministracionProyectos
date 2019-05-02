<template lang="pug">
  .profesor
    .interfaz
      h1 Profesor
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.profesor {
  background: #00395E;
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
