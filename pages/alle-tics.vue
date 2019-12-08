<template>
  <div>
    <Search />

    <transition-group name="slide-up" appear tag="div" class="list">
      <TicSingle v-for="item in getFilteredItems" :key="item.id" :item="item" :showMeta="true" />
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
      getFilteredItems: "items/getFilteredItems",
    }),
  },
};
</script>