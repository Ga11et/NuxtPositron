<template>
  <label class="BasketInstall">
    <input
      class="BasketInstall__checkbox"
      type="checkbox"
      :checked="install"
      @change="installHandler"
      :disabled="loading"
    />
    <div class="BasketInstall__svgContainer">
      <InstallSVG />
    </div>
    <div class="BasketInstall__content">
      <h4 class="BasketInstall__text">Установка</h4>
      <p class="BasketInstall__text_secondary">
        Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.
      </p>
    </div>
  </label>
</template>
<script>
import InstallSVG from './components/InstallSVG.vue'
export default {
  components: { InstallSVG },
  name: 'BasketInstall',
  computed: {
    install() {
      return this.$store.state.basket.shouldInstall
    },
    loading() {
      return this.$store.state.basket.loading
    },
  },
  methods: {
    installHandler() {
      this.$store.dispatch('basket/toggleShouldInstall')
    },
  },
}
</script>
<style lang="css">
.BasketInstall {
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #f6f8fa;
  border-radius: 5px;
  padding: 25px;
}
.BasketInstall:hover {
  cursor: pointer;
}
.BasketInstall__checkbox {
  width: 20px;
  height: 20px;
}
.BasketInstall__checkbox:hover {
  cursor: pointer;
}
.BasketInstall__svgContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 4px;
  width: 50px;
  height: 50px;
}
.BasketInstall__content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.BasketInstall__text {
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  color: #1f2432;
}
.BasketInstall__text_secondary {
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  color: #797b86;
}
</style>
