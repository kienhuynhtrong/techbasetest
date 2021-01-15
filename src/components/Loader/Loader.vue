<template>
  <transition name="fade">
    <div class="lds-spinner" :class="className" v-show="isShow">
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
      <span class="lds-spinner__item"></span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Loader",
  props: {
    isShow: Boolean,
    className: String
  }
};
</script>

<style lang="scss">
@import "loader.scss";
</style>
