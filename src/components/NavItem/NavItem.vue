<template>
  <li class="site-nav-item">
    <router-link :to=navlist.to>
      {{ navlist.text }}
    </router-link>
  </li>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
  props: {
    navlist: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style scoped>
li {
  color: #A6ABB1;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

li~li {
  margin-left: 22px;
}

a {
  color: currentColor;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all .5s ease;
}

a:hover {
  opacity: 0.6;
  border-bottom: 2px solid #A6ABB1;
}
</style>