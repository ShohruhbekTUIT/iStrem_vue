<template>
  <li>
    <span class="item-id">{{ workitem.id }}</span>
    <div v-html="workitem.logo"></div>
    <p>{{ workitem.text }}</p>
  </li>
</template>
<script>
export default {
  props: {
    workitem: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style scoped>
li {
  position: relative;
  max-width: 530px;
  padding: 22px 60px;
  border-radius: 12px;
  background: #404956;
  display: flex;
  align-items: center;
}

span {
  position: absolute;
  border-radius: 50%;
  background: #404956;
  padding: 11px 25px;
  color: #FFF;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  left: -35px;
}

li:nth-child(3)>span {
  background-color: #20B2FF;
}

p {
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 25px;
}
</style>