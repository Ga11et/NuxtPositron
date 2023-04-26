<template>
  <div class="SwipeItemPrice">
    <p class="SwipeItemPrice__rubles">{{ formattedPriceRubles }}</p>
    <p class="SwipeItemPrice__euro">{{ formattedPriseDollars }}</p>
  </div>
</template>
<script>
import { computed, toRefs } from 'vue'
import priceFormatter from '~/components/servises/priceFormatter'

export default {
  name: 'SwipeItemPrice',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedPriceRubles() {
      return priceFormatter(this.content.price)
    },
    formattedPriseDollars() {
      return Math.round((this.content.price / 80.24) * 100) / 100 + '€'
    },
  },
}
</script>
<style lang="css">
.SwipeItemPrice__rubles {
  font-size: 22px;
  line-height: 22px;
  font-weight: 500;
  color: #1f2432;
}
.SwipeItemPrice__euro {
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  color: #797b86;
  padding-top: 5px;
}
</style>
