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
  background: transparent;
  transition: all .5s ease;
  padding: 16px 24px;
  border: 2px solid #FFF;
  box-shadow: 0px 0px 0px 0px rgba(191, 87, 18, 0.10), 0px 3px 6px 0px rgba(191, 87, 18, 0.10), 0px 10px 10px 0px rgba(191, 87, 18, 0.09), 0px 23px 14px 0px rgba(191, 87, 18, 0.05), 0px 42px 17px 0px rgba(191, 87, 18, 0.01), 0px 65px 18px 0px rgba(191, 87, 18, 0.00);
}

button:hover {
  background: #fff;
  opacity: 0.5;
  color: black;
}
</style>