<template>
  <div>
    <div class="container">
      <h1>Jouw tics</h1>
    </div>
    <Search />

    <transition-group name="slide-up" appear tag="div" class="list">
      <TicSingle v-for="item in getMyItems" :key="item.id" :item="item" :showMeta="true" />
    </transition-group>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TicSingle from "~/components/interface/TicSingle.vue";
import Search from "~/components/interface/Search.vue";

export default {
  components: {
    TicSingle,
    Search,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getMyItems: "items/getMyItems",
    }),
  },
  mounted() {
    if (process.browser) {
      window.localStorage.getItem("myItems");
      this.$store.commit(
        "items/setMyItems",
        window.localStorage.getItem("myItems"),
      );
    }
  },
};
</script>