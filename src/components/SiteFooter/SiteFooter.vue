<template>
  <footer>
    <div class="f-bg">
      <div class="container">
        <div class="site-footer">
          <div class="footer-info">
            <p>Тизимдан синов тарзида фойдаланиш учун қўнғироқ қилинг ёки рўйхатдан ўтинг:</p>
            <div class="contact">
              <small>Бизнинг контактларимиз</small>
              <div>
                <a href="tel:+(71)205 84 84">+(71)205 84 84</a>
                <a href="tel:+(88) 305 84 84">+(88) 305 84 84</a>
                <a href="mailto:info@realsoft.uz">info@realsoft.uz</a>
              </div>
            </div>
            <SiteBtn :btntext='"Боғланиш"' />
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>
<script>
import SiteBtn from '../SiteBtn/SiteBtn.vue';

export default {
  components: { SiteBtn }
}
</script>
<style scoped>
footer {
  background-image: url(../../assets/images/footer-bg.jpg);
  background-size: cover;
}

.f-bg {
  background: linear-gradient(180deg, #4D5764 16.24%, rgba(77, 87, 100, 0.79) 63.54%, #4D5764 93.23%);
  padding-top: 345px;
  padding-bottom: 160px;
}

.site-footer {
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12.5px);
  padding: 31px;
}

.footer-info {
  display: flex;
  align-items: center;
}

p {
  max-width: 434px;
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  padding-right: 25px;
  border-right: 1px solid #5E6B7A;
  margin-right: 25px;
}

small {
  color: #FFF;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  opacity: 0.5;
}

a {
  text-decoration: none;
  color: #FFF;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
}

a+a {
  margin-left: 13px;
}

.contact {
  margin-right: 25px;
  padding-right: 25px;
  border-right: 1px solid #5E6B7A;
  margin-right: 25px;
}
</style>