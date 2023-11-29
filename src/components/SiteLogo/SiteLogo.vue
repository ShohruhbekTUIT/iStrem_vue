<template>
  <a href="#">
    <div v-html="logosvg"></div>

  </a>
</template>
<script>
export default {
  props: {
    logosvg: String,
  }
}
</script>
<style scoped></style>