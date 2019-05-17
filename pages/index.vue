<template>
  <TicSingle :item="getRandomItem"/>
</template>

<script>
import { mapGetters } from "vuex";

import TicSingle from "~/components/interface/TicSingle.vue";

export default {
  data() {
    return {};
  },
  components: {
    TicSingle
  },
  computed: {
    ...mapGetters({
      getItems: "items/getItems"
    }),
    getRandomItem: function() {
      return this.getItems[Math.floor(Math.random() * this.getItems.length)];
    }
  }
};
</script>

