<template>
  <li>
    <a href="#">
      <div v-html="aboutitem.svgcode"></div>
      <h3>
        {{ aboutitem.name }}
      </h3>
      <p>{{ aboutitem.text }}</p>
    </a>
  </li>
</template>
<script>
export default {
  props: {
    aboutitem: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style scoped>
li {
  border-radius: 12px;
  background: #404956;
  padding: 24px 24px 34px 24px;
}

a {
  text-decoration: none;
}

h3 {
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

p {
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  opacity: .5;
}
</style>