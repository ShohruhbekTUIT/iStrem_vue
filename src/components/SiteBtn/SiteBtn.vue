<template>
  <button>
    {{ btntext }}
  </button>
</template>
<script>
export default {
  props: {
    btntext: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
button {
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 6px;
  border: 2px solid #20B2FF;
  background: #20B2FF;
  transition: all .5s ease;
  box-shadow: 0px 0px 0px 0px rgba(22, 25, 29, 0.10), 0px 2px 4px 0px rgba(22, 25, 29, 0.10), 0px 7px 7px 0px rgba(22, 25, 29, 0.09), 0px 15px 9px 0px rgba(22, 25, 29, 0.05), 0px 26px 10px 0px rgba(22, 25, 29, 0.01), 0px 41px 11px 0px rgba(22, 25, 29, 0.00);
  padding: 16px 24px;
}

button:hover {
  opacity: 0.6;
}
</style>