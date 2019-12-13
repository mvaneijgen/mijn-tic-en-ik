<template>
  <button class="AlloyBubble">
    <span>Wat doe ik hier? Ik wil terug!</span>
    <div ref="bubble" class="bubble"></div>
  </button>

</template>

<script>
import { gsap } from "gsap";

export default {
  name: "SubmitBubble",
  data() {
    return {};
  }, // End data
  methods: {
    bubbleIn() {
      const bubble = this.$refs.bubble;

      gsap.from(bubble, {
        delay: 0.5,
        duration: 1,
        scale: 0,
        transformOrigin: "center center",
        ease: "elastic.out(1, 0.5)",
        clearProps: "transform",
      });
    },
  },
  mounted() {
    this.bubbleIn();
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
span {
  color: $brand-dark;
}
.bubble {
  background-color: $brand-one;
}
</style>