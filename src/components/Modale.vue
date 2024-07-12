<template>
  <div>

    <h3>{{title}}</h3>
    <button @click="$emit('ok')">OK</button>
    <button @click="$emit('cancel')">CANCEL</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  }
}
</script>

<style lang="scss" scoped>
div {
  background-color: blue;
  height: 200px;
  width: 200px;
}
</style>