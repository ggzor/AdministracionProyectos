<template lang="pug">
  .informacion(:class="{ esObscura, siempreVisible }")
    a(href="#") Ayuda
    a(href="#") Contacto
    a(href="#") Términos

</template>


<script>
export default {
  props: { esObscura: Boolean, siempreVisible: { type: Boolean, default: false } }
}
</script>

<style lang="scss" scoped>
@import "../resources/style/style";

.informacion {
  align-self: flex-end;
  justify-self: flex-end;

  display: flex;
  flex-direction: row;
  visibility: collapse;

  margin: 1em 2em;

  > *:not(:last-child) {
    margin-right: 1em;
  }

  > a {
    color: $dark;
  }

  &.esObscura {
    > a {
      color: white;
    }

    visibility: visible;
  }
}

@media all and (max-width: 960px) {
  .informacion {
    margin: 1em;
    visibility: visible;
  }
}

.siempreVisible {
  visibility: visible;
}

@media print {
  .informacion {
    visibility: hidden;
  }
}
</style>
