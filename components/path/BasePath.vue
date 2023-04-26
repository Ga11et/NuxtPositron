<template>
  <div class="Path">
    <p class="Path__item Path__item_main">{{ path[0] }}</p>
    <div class="Path__item" v-for="item in path.slice(1)" :key="item">
      <ArrowSVG />
      <p>{{ item }}</p>
    </div>
  </div>
</template>
<script>
import ArrowSVG from './components/ArrowSVG.vue'
export default {
  components: { ArrowSVG },
  name: 'BasePath',
  props: {
    path: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style lang="css">
.Path {
  padding: 30px 80px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.Path__item {
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  color: #797b86;
  display: flex;
  align-items: center;
  gap: 10px;
}
.Path__item_main {
  color: #33374e;
}
</style>
