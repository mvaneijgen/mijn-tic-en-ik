<template>
  <nuxt-link to="/" class="logo">
    <span>Mijn</span>
    <span>
      <span>tic</span>
      <span class="amp">&</span>
      <span>ik</span>
    </span>
  </nuxt-link>
</template>

<script>
export default {
  name: "Logo",
  data() {
    return {
      title: "Logo",
    };
  }, // End data
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.logo {
  font-size: 20px;
  text-decoration: none;
  padding: $base-margin;
  font-weight: 600;

  line-height: 1.2em;
  color: $brand-dark;
  display: block;
  width: auto;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  left: 0;
  // @include media-breakpoint-down(sm) {
  //   transform: scale(0.6);
  //   transform-origin: bottom left;
  // }

  > span {
    display: block;
    .amp {
      letter-spacing: -10px;
      transform: translateX(-5px);
      display: inline-block;
    }
  }
  @include media-breakpoint-up(md) {
    padding: 30px;
    font-size: 28px;
  }
  @include media-breakpoint-up(lg) {
    padding: 30px;
    font-size: 36px;
  }
}
</style>