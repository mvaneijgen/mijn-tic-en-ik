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
          <button class="btn-fancy" ref="loseFocus" @click="getRandomItem">Dit doe ik ook!</button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import { gsap } from "gsap";

import tics from "~/apollo/queries/tics";

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
  apollo: {
    tics: {
      prefetch: true,
      query: tics,
      update(data) {
        this.$store.commit("items/setItems", data.tics);
        this.$store.commit("items/setItemCurrent");
        // return data.tics;
      },
    },
  },
  computed: {
    ...mapGetters({
      getItemCurrent: "items/getItemCurrent",
    }),

    // Animate the number 💯 using GSAP
    animatedNumber: function () {
      return this.tweenedNumber.toFixed(0);
    },
  },
  methods: {
    getRandomItem() {
      gsap
        .timeline()
        .to(this.$refs.loseFocus, {
          duration: 0.2,
          boxShadow: "0 0 0 20px rgba(30, 30, 30, 0.3)",
        })
        .set(this.$refs.loseFocus, {
          boxShadow: "0 0 0 0 rgba(30, 30, 30, 0.3)",
        });
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
  beforeDestroy: function () {
    window.removeEventListener("keydown", this.arrowNavigation);
  },
  // created() {
  //   this.$store.commit("items/setItemCurrent");
  // },
  watch: {
    // Animate the number 💯 using GSAP
    getItemCurrent: function (newValue) {
      gsap.to(this.$data, 0.5, {
        tweenedNumber: newValue.likes_aggregate.aggregate.count,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

.btn-fancy {
  box-shadow: 0 0 0 0 rgba($brand-dark, 0.3);
}
</style>
