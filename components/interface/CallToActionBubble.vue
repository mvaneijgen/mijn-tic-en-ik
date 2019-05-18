<template>
  <button @click="callToActionToggle" class="CallToActionBubble" :data-active="active">
    <span>{{callToAction}}</span>
    <div ref="bubble" class="bubble"></div>
  </button>
</template>

<script>
import { TweenMax, TimelineMax } from "gsap";
export default {
  name: "CallToActionBubble",
  data() {
    return {
      callToAction: "Deel jouw tic met de wereld",
      callToAction_link: "/submit",
      callToActionAlt: "Wat doe ik hier? Ik wil terug!",
      callToActionAlt_link: "/",
      active: false
    };
  }, // End data
  methods: {
    callToActionToggle() {
      // Update route 📲
      this.$router.push({
        path: this.callToAction_link
      });
      // // change active ⚡️ status
      // this.active = !this.active;
      // Switch text 📝
      [this.callToAction, this.callToActionAlt] = [
        this.callToActionAlt,
        this.callToAction
      ];
      // Switch links 🔗
      [this.callToAction_link, this.callToActionAlt_link] = [
        this.callToActionAlt_link,
        this.callToAction_link
      ];
      // Animate 🐤 everything
      const bubble = this.$refs.bubble;

      function pageTransition() {
        var tl = new TimelineMax();

        tl.to(bubble, 1.5, {
          scale: 20,
          ease: Power4.easeOut,
          transformOrigin: "center center"
        })
          // .set(pageBackground, { css: { backgroundColor: background } })
          .set(bubble, { clearProps: "all" });
        // Pop the bubble back in to view
        tl.eventCallback("onComplete", function() {
          console.warn("done");
          // popAnimation(color);
        });
        // popAnimation(color);
      }
      pageTransition();
    }
  },
  mounted() {
    // bubble.addEventListener("click", function() {
    //   pageTransition(colorbubble, colorBackground);
    // });

    function popAnimation(color) {
      var timelinePop = new TimelineMax();

      timelinePop
        .set(bubble, { css: { backgroundColor: colorBackground } })
        .from(bubble, 1, {
          delay: 0.5,
          scale: 0,
          ease: Elastic.easeOut.config(1, 0.3),
          transformOrigin: "right bottom",
          clearProps: "transform"
        });
    }

    // document.onload = popAnimation(colorBackground);
  }
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
    transition: transform;
    transition-duration: 300ms;
    transition-timing-function: ease;
  }

  &:hover {
    .bubble {
      transform: scale(1.1);
    }
  }
  &[data-active="true"] {
    .bubble {
      background-color: $brand-one;
    }
  }
}
</style>