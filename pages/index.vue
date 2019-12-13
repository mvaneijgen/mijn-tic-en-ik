<template>
  <section class="tic">
    <div class="inner">

      <transition name="fade-out-slide-it" mode="out-in">
        <TicSingle v-if="getItemCurrent" :item="getItemCurrent" :key="getItemCurrent.id" />
      </transition>

      <div class="meta">
        <button @click="getRandomItem" class="btn--stealth">Volgende tic</button>
        <div class="alloy-right">
          <span>{{animatedNumber}} mensen delen deze tic</span>
          <button ref="loseFocus" @click="getRandomItem">Dit doe ik ook!</button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import { TweenMax, TimelineMax } from "gsap";

import TicSingle from "~/components/interface/TicSingle.vue";

export default {
  components: {
    TicSingle,
  },
  data() {
    return {
      tweenedNumber: 0,
    };
  },
  computed: {
    ...mapGetters({
      getItemCurrent: "items/getItemCurrent",
    }),

    // Animate the number 💯 using GSAP
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    },
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
    },
  },
  mounted() {
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
    },
  },
};
</script>
<style lang="scss" scoped>
// .alloy-btn-group {
//   > * {
//     text-align: center;
//     display: block !important;
//   }
// }
//
</style>
