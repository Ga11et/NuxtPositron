<template>
  <div class="BasketHead">
    <h2 class="BasketHead__heading">Ваша корзина</h2>
    <p class="BasketHead__count">{{ count }} товара</p>
    <button class="BasketHead__clear" :disabled="loading" @click.prevent="deleteHandler">
      Очистить корзину
    </button>
  </div>
</template>
<script>
export default {
  name: 'BasketHead',
  computed: {
    count() {
      return this.$store.state.basket.count
    },
    loading() {
      return this.$store.state.basket.loading
    },
  },
  methods: {
    deleteHandler() {
      this.$store.dispatch('basket/deleteAllBasket')
    },
  },
}
</script>
<style lang="css">
.BasketHead {
  display: grid;
  grid-template-columns: max-content max-content 1fr;
  gap: 22px;
  align-items: end;
}
.BasketHead__heading {
  font-size: 44px;
  line-height: 44px;
  font-weight: 700;
  color: #1f2432;
}
.BasketHead__count {
  font-size: 18px;
  line-height: 23px;
  font-weight: 400;
  color: #797b86;
}
.BasketHead__clear {
  background-color: transparent;
  border: none;
  width: max-content;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: #797b86;
  text-decoration: underline;
  justify-self: end;
}
.BasketHead__clear:hover {
  cursor: pointer;
}
</style>
