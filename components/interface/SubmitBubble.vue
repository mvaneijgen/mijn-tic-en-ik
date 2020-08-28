<template>
  <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" :css="false" appear>
    <button class="AlloyBubble" v-if="!getBubbleToggle" @click="navSubmit">
      <span>Deel jouw tic met de wereld</span>
      <div class="bubble"></div>
    </button>
  </transition>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "SubmitBubble",
  data() {
    return {
      clicked: false,
    };
  }, // End data
  computed: {
    getBubbleToggle() {
      return this.$store.getters["interface/getState"]("bubbleToggle");
    },
  },
  methods: {
    navSubmit() {
      this.clicked = true;
      // this.show = !this.show;
      this.$store.commit({
        type: "interface/setStateSwitch",
        key: "bubbleToggle",
      });
      this.$store.commit({
        type: "interface/setStateSwitch",
        key: "bubbleToggleUrl",
        value: this.$route.path,
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
        delay: 2,
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
          if (this.clicked) {
            this.clicked = false;
            // Update route 📲
            this.$router.push({
              path: "/submit",
            });
          }
          done();
        },
      });
    },
    // END Bubble 💭 transtion  -------------------------------------//
  },
  mounted() {},
};
</script>