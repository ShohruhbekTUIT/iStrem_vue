<template>
  <SiteHeader />
  <router-view></router-view>
  <SiteFooter />
</template>
<script setup>
import SiteHeader from './components/SiteHeader/SiteHeader.vue'
import SiteMain from './components/SiteMain/SiteMain.vue'
import SiteFooter from './components/SiteFooter/SiteFooter.vue'
import { RouterLink, RouterView } from 'vue-router';
</script>
<style></style>