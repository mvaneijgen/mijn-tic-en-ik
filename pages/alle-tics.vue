<template>
  <div>
    <TicSingle v-for="item in getItems" :key="item.id" :item="item"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TicSingle from "~/components/interface/TicSingle.vue";

export default {
  components: {
    TicSingle
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getItems: "items/getItems"
    }),

    // Animate the number 💯 using GSAP
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    }
  }
};
</script>
