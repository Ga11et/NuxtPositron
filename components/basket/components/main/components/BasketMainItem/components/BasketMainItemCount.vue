<template>
  <div class="BasletMainItemCount">
    <button
      class="BasletMainItemCount__item BasletMainItemCount__item_left"
      @click.prevent="decreaseHandler"
    >
      -
    </button>
    <span class="BasletMainItemCount__item">{{ $props.content.count }}</span>
    <button
      class="BasletMainItemCount__item BasletMainItemCount__item_right"
      @click.prevent="increaseHandler"
    >
      +
    </button>
  </div>
</template>
<script>
export default {
  name: 'BasletMainItemCount',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  methods: {
    increaseHandler() {
      this.$store.dispatch('basket/changeBasketProductCount', {
        ...this.content,
        count: this.content.count + 1,
      })
    },
    decreaseHandler() {
      this.$store.dispatch('basket/changeBasketProductCount', {
        ...this.content,
        count: this.content.count - 1,
      })
    },
  },
}
</script>
<style lang="css">
.BasletMainItemCount {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
}
.BasletMainItemCount__item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f8fa;
  border: none;
  width: 34px;
  height: 34px;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  color: #1f2432;
}
.BasletMainItemCount__item_left {
  border-radius: 4px 0 0 4px;
}
.BasletMainItemCount__item_right {
  border-radius: 0 4px 4px 0;
}
.BasletMainItemCount__item_left:hover,
.BasletMainItemCount__item_right:hover {
  cursor: pointer;
  font-size: 16px;
  line-height: 16px;
}
</style>
