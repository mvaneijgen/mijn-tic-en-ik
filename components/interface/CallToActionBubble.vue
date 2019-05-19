<template>
  <button @click="callToActionToggle" class="CallToActionBubble">
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
      callToActionAlt_link: "/"
    };
  }, // End data
  methods: {
    callToActionToggle() {
      // Update route 📲
      this.$router.push({
        path: this.callToAction_link
      });
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

      this.animationScaleBubble();
    },
    // animationPopIn() {
    //   const bubble = this.$refs.bubble;

    //   const timelinePop = new TimelineMax();
    //   timelinePop.from(bubble, 1, {
    //     scale: 0,
    //     ease: Elastic.easeOut.config(1, 0.3),
    //     transformOrigin: "right bottom",
    //     clearProps: "transform"
    //   });
    //   // .fromTo(
    //   //   bubble,
    //   //   1,
    //   //   {
    //   //     // delay: 0.5,
    //   //     scale: 0
    //   //     // ease: Elastic.easeOut.config(1, 0.3),
    //   //     // transformOrigin: "right bottom"
    //   //     // clearProps: "transform"
    //   //   },
    //   //   {
    //   //     // delay: 0.5,
    //   //     scale: 1,
    //   //     ease: Elastic.easeOut.config(1, 0.3),
    //   //     transformOrigin: "right bottom"
    //   //     // clearProps: "transform"
    //   //   }
    //   // );
    //   // .to(bubble, 0.1, { autoAlpha: 1 }, 0);
    //   //   // .set(bubble, {
    //   //   //   scale: 0,
    //   //   //   transformOrigin: "right bottom",
    //   //   //   clearProps: "opacity,visibility"
    //   //   // })
    //   //   .fromTo(
    //   //     bubble,
    //   //     1,
    //   //     {
    //   //       delay: 0.5,
    //   //       scale: 0,
    //   //       ease: Elastic.easeOut.config(1, 0.3),
    //   //       transformOrigin: "right bottom"
    //   //       // clearProps: "transform"
    //   //     },
    //   //     {
    //   //       // delay: 0.5,
    //   //       scale: 1
    //   //       // ease: Elastic.easeOut.config(1, 0.3),
    //   //       // transformOrigin: "right bottom"
    //   //       // clearProps: "transform"
    //   //     }
    //   // );
    //   // .from(bubble, 1, {
    //   //   delay: 0.5,
    //   //   scale: 0,
    //   //   ease: Elastic.easeOut.config(1, 0.3),
    //   //   transformOrigin: "right bottom"
    //   //   // clearProps: "transform"
    //   // });
    //   // .to(".logo-svg", 1, { opacity: 1 }, 0);
    //   // .from(bubble, 1, {
    //   //   delay: 0.5,
    //   //   // opacity: 0,
    //   //   scale: 0,
    //   //   ease: Elastic.easeOut.config(1, 0.3),
    //   //   transformOrigin: "right bottom",
    //   //   clearProps: "transform"
    //   // });
    // },
    animationScaleBubble() {
      const bubble = this.$refs.bubble;
      const that = this;
      const timelineScale = new TimelineMax();

      timelineScale
        .to(bubble, 1.5, {
          scale: 20,
          ease: Power4.easeOut,
          transformOrigin: "center center"
        })
        // .set(pageBackground, { css: { backgroundColor: background } })
        .set(bubble, {
          clearProps: "all"
          // autoAlpha: 0,
          // clearProps: "transform,transform-origin"
        });
      // Pop the bubble back in to view
      timelineScale.eventCallback("onComplete", function() {
        that.$store.commit({
          type: "interface/setStateSwitch",
          key: "activeBubble"
        });
        // that.animationPopIn();
        // popAnimation(color);
      });
      // popAnimation(color);
    }
  },
  mounted() {
    // this.animationPopIn();
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