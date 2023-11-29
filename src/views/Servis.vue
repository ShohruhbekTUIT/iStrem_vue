<template>
  <main>
    <ServisHero />
    <ServisOperator />
    <div class="container">
      <div class="homiylar">
        <img src="../assets/images/Akfa.png" alt="akfa logo">
        <img src="../assets/images/itpark_logo.png" alt="it park">
        <img src="../assets/images/artel.png" alt="artel logo">
        <img src="../assets/images/Mediaprk.png" alt="mediapart">
      </div>
    </div>
  </main>
</template>
<script>
import ServisHero from '../components/ServisHero/ServisHero.vue'
import ServisOperator from '../components/ServisOperator/ServisOperator.vue'
export default {
  components: { ServisHero, ServisOperator }
}
</script>
<style scoped>
.homiylar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.homiylar img {
  width: 20%;
  height: auto;
}
</style>
