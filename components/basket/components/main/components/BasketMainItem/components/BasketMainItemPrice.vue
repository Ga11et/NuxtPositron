<template>
  <div class="BasketMainItem__price">
    {{ price }}
  </div>
</template>
<script>
export default {
  name: 'BasketMainItemPrice',
  props: {
    price: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="css">
.BasketMainItem__price {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  color: #1f2432;
}
</style>
