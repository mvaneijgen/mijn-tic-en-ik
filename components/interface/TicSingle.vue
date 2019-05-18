<template>
  <div class="TicSingle">
    <div class="inner">
      <blockquote>{{item.title}}</blockquote>
      <div class="meta">
        <span>{{item.share}} mensen delen deze tic</span>
        <button @click="getRandomItem">Dit doe ik ook!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  name: "TicSingle",
  data() {
    return {};
  }, // End data
  methods: {
    getRandomItem() {
      this.$store.commit("items/setItemCurrent");
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
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.TicSingle {
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