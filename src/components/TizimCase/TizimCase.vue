<template>
  <div class="info">
    <div class="info-l">
      <h2><span>{{ datas.titleC }}</span>{{ datas.title }}</h2>
      <p>{{ datas.text1 }}</p>
      <p>{{ datas.text2 }}</p>
      <p class="text">{{ datas.text3 }}</p>
      <SiteBtn :btntext='"batafsil"' />
    </div>
    <img :src="datas.imgsrc" alt="template">
    <div class="b-bg">
    </div>
  </div>
</template>
<script>
import SiteBtn from '../SiteBtn/SiteBtn.vue';

export default {
  components: { SiteBtn },
  props: {
    datas: {
      type: Object
    }
  }
}
</script>
<style scoped>
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 160px 0;
}

.info-l {
  max-width: 790px;
}

span {
  display: block;
  color: #D1D1D1;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

h2 {
  color: #FFF;
  text-shadow: 0px 0px 0px rgba(22, 25, 29, 0.10), 0px 2px 4px rgba(22, 25, 29, 0.10), 0px 7px 7px rgba(22, 25, 29, 0.09), 0px 15px 9px rgba(22, 25, 29, 0.05), 0px 26px 10px rgba(22, 25, 29, 0.01), 0px 41px 11px rgba(22, 25, 29, 0.00);
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 50px;
}

p {
  color: #D1D1D1;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin: 0;
  padding: 0;
}

p+p {
  padding-top: 25px;
}

.text {
  margin-bottom: 112px;
}

img {
  width: 345px;
}

.b-bg {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 882px;
  opacity: 0.2;
  background: #7ED958;
  filter: blur(250px);
  right: 0;
}
</style>