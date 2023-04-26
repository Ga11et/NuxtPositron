<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in multipliedProducts" :key="item.id">
        <SwipeItem :content="item" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import SwipeItem from './components/swipeItem/SwipeItem.vue'
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  components: { SwipeItem },
  name: 'SimilarsSwiper',
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
  computed: {
    multipliedProducts() {
      return [...this.content, ...this.content, ...this.content, ...this.content]
    },
  },
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay])
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 4,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },
}
</script>
<style lang="css">
.swiper {
  overflow: visible;
}
.swiper-button-next,
.swiper-button-prev {
  background-color: #90a2b5;
  fill: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: -75px;
}
.swiper-button-prev {
  left: unset;
  right: 150px;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  color: white;
  font-size: 20px;
}
.swiper-pagination.swiper-pagination-fraction.swiper-pagination-horizontal {
  position: absolute;
  top: -85px;
  right: 77px;
  left: unset;
  bottom: unset;
  width: fit-content;
}
.swiper-pagination-current {
  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
  color: #212121;
}
.swiper-pagination-total {
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #797b86;
}
</style>
