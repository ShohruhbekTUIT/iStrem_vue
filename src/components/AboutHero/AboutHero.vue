<template>
  <section>
    <div class="container">
      <AboutCase :datas="abouthero" />

      <ul class="statistik-list">
        <li><span>124</span>supermarketlar</li>
        <li><span>56</span>Tashkilotlar</li>
        <li><span>45</span>o'quv markazlari</li>
      </ul>
    </div>
  </section>
</template>
<script>
import AboutCase from '../AboutCase/AboutCase.vue';

export default {
  components: { AboutCase },
  data() {
    return {
      abouthero: {
        titleC: 'Қисқача',
        title: 'Тизим ҳақида',
        text1: 'Фойдаланувчи турига қараб алоҳида функционал рўйхати шаклланади;',
        text2: 'Платформа интуитив, ишлатиш учун қулай ва мукаммал/бехато ишлайди;',
        text3: 'Чуқур машинавий таълим ва нейрон тармоқлардан фойдаланиш.',
        imgsrc: "./src/assets/images/about-hero.jpg",
      }
    }
  }
}
</script>
<style scoped>
.statistik-list {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
}

.statistik-list li {
  color: #FFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
}

.statistik-list li span {
  display: block;
  text-align: center;
  color: #FFF;
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>