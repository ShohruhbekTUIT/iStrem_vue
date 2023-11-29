<template>
  <nav id="nav">
    <ul>
      <NavItem v-for="item in navlist" :navlist="item" />
    </ul>
  </nav>
</template>
<script>
import NavItem from '../NavItem/NavItem.vue';

export default {
  data() {
    return {
      navlist: [
        {
          text: "Главная",
          to: '/'
        },
        {
          text: "Сервисы",
          to: '/servis'
        },
        {
          text: "Услуги",
          to: '/uslugi'
        },
        {
          text: "O нас",
          to: '/about'
        },
        {
          text: "Контакты",
          to: '/contact'
        },
      ]
    };
  },
  components: { NavItem }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  display: flex;
  align-items: center;
}

li:nth-child(1) {
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
}
</style>