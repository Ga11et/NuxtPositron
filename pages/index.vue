<template>
  <div>
    <BaseHeader />
    <main>
      <BasePath :path="['Главная', 'Корзина']" />
      <Basket />
      <Similars />
    </main>
  </div>
</template>
<script setup>
import Basket from '~/components/basket/Basket.vue'
import BaseHeader from '~/components/header/BaseHeader.vue'
import BasePath from '~/components/path/BasePath.vue'
import Similars from '~/components/similars/Similars.vue'
</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
}

#__nuxt {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
