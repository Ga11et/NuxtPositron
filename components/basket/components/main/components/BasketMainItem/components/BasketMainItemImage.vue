<template>
  <img class="BasketMainItem__image" :src="`/${$props.content.image}`" :alt="$props.content.name" />
</template>
<script>
export default {
  name: 'BasketMainItemImage',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="css">
.BasketMainItem__image {
  display: block;
  width: 100px;
  height: 100px;
}
</style>
