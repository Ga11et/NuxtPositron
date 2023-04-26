<template>
  <div class="BasketMainItem">
    <BasketMainItemImage :content="$props.content" />
    <BasketMainItemDescription :content="$props.content" />
    <BasketMainItemCount :content="$props.content" />
    <BasketMainItemPrice :price="price" />
    <BasketMainItemDelete :content="$props.content" />
  </div>
</template>
<script>
import BasketMainItemDescription from './components/BasketMainItemDescription.vue'
import BasketMainItemCount from './components/BasketMainItemCount.vue'
import priceFormatter from '~/components/servises/priceFormatter'
import BasketMainItemImage from './components/BasketMainItemImage.vue'
import BasketMainItemPrice from './components/BasketMainItemPrice.vue'
import BasketMainItemDelete from './components/delete/BasketMainItemDelete.vue'
export default {
  components: {
    BasketMainItemCount,
    BasketMainItemDescription,
    BasketMainItemImage,
    BasketMainItemPrice,
    BasketMainItemDelete,
  },
  name: 'BasketMainItem',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  computed: {
    price() {
      return priceFormatter(this.content.price * this.content.count)
    },
  },
}
</script>
<style lang="css">
.BasketMainItem {
  display: grid;
  grid-template-columns: 100px 2fr 1fr 1fr 20px;
  gap: 30px;
  padding: 25px 0 25px 25px;
  border-bottom: 1px solid #c4c4c4;
}
.BasketMainItem:last-child {
  border-bottom: none;
}
</style>
