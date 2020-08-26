<template>
  <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" :css="false" appear>
    <button class="AlloyBubble" v-if="getBubbleToggle" @click="navSubmit">
      <span>Wat doe ik hier? Ik wil terug!</span>
      <div class="bubble"></div>
    </button>
  </transition>

</template>

<script>
import { gsap } from "gsap";

export default {
  name: "SubmitBubble",
  data() {
    return {};
  }, // End data
  computed: {
    getBubbleToggle() {
      return this.$store.getters["interface/getState"]("bubbleToggle");
    },
  },
  methods: {
    navSubmit() {
      // this.show = !this.show;
      this.$store.commit({
        type: "interface/setStateSwitch",
        key: "bubbleToggle",
      });
    },
    //------------------------------------------------------//
    // Bubble 💭 transtion
    //------------------------------------------------------//
    beforeEnter(el) {
      // we'll place our starting style here
      gsap.set(el.querySelector(".bubble"), {
        scale: 0,
      });
      gsap.set(el.querySelector("span"), {
        opacity: 0,
      });
    },
    enter(el, done) {
      // style to transition to on enter
      gsap.to(el.querySelector(".bubble"), {
        duration: 1,
        transformOrigin: "right bottom",
        scale: 1,
        ease: "elastic.out(1, 0.5)",
        onComplete: () => {
          gsap.to(el.querySelector("span"), {
            duration: 0.3,
            opacity: 1,
          });
          done();
        },
      });
    },
    leave(el, done) {
      // style to transition away to on leave
      gsap.to(el.querySelector("span"), {
        duration: 0.3,
        opacity: 0,
      });
      gsap.to(el.querySelector(".bubble"), {
        duration: 1,
        scale: 15,
        transformOrigin: "center center",
        // onComplete: done,
        onComplete: () => {
          // Update route 📲
          this.$router.push({
            path: "/",
          });
          done();
        },
      });
    },
    // END Bubble 💭 transtion  -------------------------------------//
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