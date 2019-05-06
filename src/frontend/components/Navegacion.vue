<template lang="pug">
  .navegacion-paginas
    div {{ titulo }}
    a.navegacion(:class="{ esObscuro }",:href="href")
      i.fas(:class="icono")
</template>

<script>
export default {
  props: { titulo: String, href: String, icono: String, esObscuro: Boolean }
}
</script>

<style lang="scss" scoped>
@import "../resources/style/style";

.navegacion-paginas {
  grid-area: centro;

  align-self: flex-end;
  justify-self: center;

  margin-bottom: 4em;

  visibility: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  > *:not(:last-child) {
    margin-bottom: 0.5em;
  }
}

a.navegacion {
  background: white;
  color: $dark;
  padding: 0.5em;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  &.esObscuro {
    background: $dark;
    color: white;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    text-decoration: none;
  } 
}

@media all and (max-width: 960px) {
  .navegacion-paginas {
    visibility: visible;
  }
}
</style>
