<template>
  <div class="BasketPriceValue">
    <p>Сумма заказа</p>
    <p>{{ price }}</p>
  </div>
</template>
<script>
export default {
  name: 'BasketPriceValue',
  props: {
    price: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="css">
.BasketPriceValue {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #1f2432;
}
</style>
