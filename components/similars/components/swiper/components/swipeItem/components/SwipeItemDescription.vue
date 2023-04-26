<template>
  <div class="SwipeItemDescription">
    <h3 class="SwipeItemDescription__heading">{{ $props.content.shortName }}</h3>
    <p class="SwipeItemDescription__text">{{ descriptionFormatter }}</p>
  </div>
</template>
<script>
export default {
  name: 'SwipeItemDescription',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  computed: {
    descriptionFormatter() {
      const text = this.$props.content.description
      return text.length < 70 ? text : text.slice(0, 67) + '...'
    },
  },
}
</script>
<style lang="css">
.SwipeItemDescription {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 5px;
}
.SwipeItemDescription__heading {
  font-size: 22px;
  line-height: 22px;
  font-weight: 700;
  color: #1f2432;
}
.SwipeItemDescription__text {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #1f2432;
}
</style>
