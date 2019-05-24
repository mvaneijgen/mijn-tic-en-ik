<template>
  <section class="tic">
    <div class="inner">
      <transition name="fade-out-slide-it" mode="out-in">
        <TicSingle v-if="getItemCurrent" :item="getItemCurrent" :key="getItemCurrent.id"/>
      </transition>
      <div class="meta">
        <span>{{animatedNumber}} mensen delen deze tic</span>
        <button ref="loseFocus" @click="getRandomItem">Dit doe ik ook!</button>
      </div>
      <!-- <TicSingle v-if="getItemCurrent" :item="getItemCurrent" :key="getItemCurrent.id"/> -->
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import { TweenMax, TimelineMax } from "gsap";

import TicSingle from "~/components/interface/TicSingle.vue";

export default {
  components: {
    TicSingle
  },
  data() {
    return {
      tweenedNumber: 0
    };
  },
  computed: {
    ...mapGetters({
      getItemCurrent: "items/getItemCurrent"
    }),

    // Animate the number 💯 using GSAP
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  methods: {
    getRandomItem() {
      this.$store.commit("items/setItemCurrent");
      this.$refs.loseFocus.blur();
    },
    arrowNavigation(e) {
      if (e.key == "ArrowRight") {
        this.getRandomItem();
      }
      if (e.key == "ArrowLeft") {
        this.$store.commit("items/setItemPreviousAsCurrent");
      }
    }
  },
  created() {
    if (process.client) {
      window.addEventListener("keydown", this.arrowNavigation);
    }
  },
  beforeDestroy: function() {
    window.removeEventListener("keydown", this.arrowNavigation);
  },
  created() {
    this.$store.commit("items/setItemCurrent");
  },
  watch: {
    // Animate the number 💯 using GSAP
    getItemCurrent: function(newValue) {
      TweenMax.to(this.$data, 0.5, { tweenedNumber: newValue.share });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.tic {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
}
.meta {
  text-align: center;
  font-weight: 600;
  > * {
    margin-bottom: $base-margin;
    display: inline-block;
  }
  @include media-breakpoint-up(lg) {
    text-align: right;
    > * {
      margin-left: $base-margin;
      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>

