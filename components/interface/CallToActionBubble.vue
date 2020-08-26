<template>
  <div>
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" :css="false" appear>
      <button @click="callToActionToggle" class="CallToActionBubble" v-if="toggle">
        <span>{{callToAction}}</span>
        <div class="bubble"></div>
      </button>
    </transition>
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" :css="false" appear>
      <button @click="callToActionToggle" class="CallToActionBubble" v-if="!toggle" :data-active="!toggle">
        <span>{{callToActionAlt}}</span>
        <div class="bubble"></div>
      </button>
    </transition>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "CallToActionBubble",
  data() {
    return {
      toggle: true,
      callToAction: "Deel jouw tic met de wereld",
      callToAction_link: "/submit",
      callToActionAlt: "Wat doe ik hier? Ik wil terug!",
      callToActionAlt_link: "/",
    };
  }, // End data
  methods: {
    callToActionToggle() {
      this.toggle = !this.toggle;
      // // Switch text 📝
      // [this.callToAction, this.callToActionAlt] = [
      //   this.callToActionAlt,
      //   this.callToAction,
      // ];
      // Switch links 🔗
      // [this.callToAction_link, this.callToActionAlt_link] = [
      //   this.callToActionAlt_link,
      //   this.callToAction_link,
      // ];
      // Animate 🐤 everything
      // this.animationScaleBubble();
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
          // this.showPage = !this.showPage;
          // Update route 📲
          this.$router.push({
            path: this.callToAction_link,
          });
          // Switch links 🔗
          [this.callToAction_link, this.callToActionAlt_link] = [
            this.callToActionAlt_link,
            this.callToAction_link,
          ];
          done();
        },
      });
    },
    // END Bubble 💭 transtion  -------------------------------------//
  },
  mounted() {
    // this.animationPopIn();
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.CallToActionBubble {
  cursor: pointer;

  position: absolute;
  bottom: 0;
  right: 0;
  padding: $base-margin;
  text-decoration: none;
  max-width: 220px;
  display: block;
  text-align: right;
  background-color: transparent;
  border: 0;
  span {
    display: inline-block;
    transform: translateY(-40px);
    position: relative;
    z-index: 1;
    color: $brand-light;
  }
  .bubble {
    z-index: -1;
    width: 350px;
    height: 350px;
    background-color: $brand-dark;
    border-radius: 50%;
    position: absolute;
    bottom: -100px;
    right: -100px;
    // transition: transform;
    // transition-duration: 300ms;
    // transition-timing-function: ease;
  }

  // &:hover {
  //   .bubble {
  //     transform: scale(1.1);
  //   }
  // }
  &[data-active="true"] {
    span {
      color: $brand-dark;
    }
    .bubble {
      background-color: $brand-one;
    }
  }
}
</style>