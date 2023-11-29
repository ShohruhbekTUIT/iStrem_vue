<template>
  <div>
    <span class="line"></span>
    <span class="spansvg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.46997 10.74L12 14.26L15.53 10.74" stroke="white" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>

    </span>
    <span class="line"></span>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.line {
  width: 600px;
  height: 1px;
  opacity: 0.3;
  background: #FFF;
}

.spansvg {
  margin: 0 24px;
}
</style>