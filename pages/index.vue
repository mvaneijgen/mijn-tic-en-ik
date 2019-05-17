<template>
  <TicSingle :item="getItemCurrent" :key="getItemCurrent.id"/>
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
      getItemCurrent: "items/getItemCurrent"
    })
  },
  mounted() {
    this.$store.commit("items/setCurrentItem");
  }
};
</script>

