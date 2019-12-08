<template>
  <section class="tic">
    <div class="inner">

      <transition name="fade-out-slide-it" mode="out-in">
        <TicSingle :item="getItemByID" :key="getItemByID.id" :showMeta="true" />
      </transition>

    </div>
  </section>
</template>

<script>
import TicSingle from "~/components/interface/TicSingle.vue";

export default {
  components: {
    TicSingle,
  },
  data() {
    return {};
  },
  computed: {
    getItemByID() {
      return this.$store.getters["items/getItemByID"](this.$route.params.id);
    },
  },
  methods: {
    arrowNavigation(e) {
      if (e.key == "ArrowRight") {
        this.$router.push({
          path: `/tic/${parseInt(this.$route.params.id) + 1}`,
        });
      }
      if (e.key == "ArrowLeft") {
        this.$router.push({
          path: `/tic/${parseInt(this.$route.params.id) - 1}`,
        });
      }
    },
  },
  created() {
    if (process.client) {
      window.addEventListener("keydown", this.arrowNavigation);
    }
  },
  beforeDestroy: function() {
    window.removeEventListener("keydown", this.arrowNavigation);
  },
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
.alloy-back {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

