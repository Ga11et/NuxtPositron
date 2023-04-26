<template>
  <div class="BasketPriceValueFinal">
    <p>Стоимость товаров</p>
    <p class="BasketPriceValueFinal__price">{{ price }}</p>
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
.BasketPriceValueFinal {
  padding: 10px 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  color: #1f2432;
}
.BasketPriceValueFinal__price {
  font-size: 26px;
  line-height: 26px;
  font-weight: 700;
}
</style>
