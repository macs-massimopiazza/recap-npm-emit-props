<template>
  <div>
    sono il componente saluto
    <p>il mio messaggio è {{ messaggio }}</p>

    <button @click="$emit('bottoneCliccato', 'CIAOOO')">CLICCAMI</button>
  </div>
</template>

<script>
export default {
  props: ['messaggio']
}
</script>

<style lang="scss" scoped>
div {
  background-color: red;
}
</style>