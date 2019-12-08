<template>
  <div class="container single-tic">

    <div class="container-blockquote">
      <blockquote @click="singleTic">{{item.title}}</blockquote>
    </div>

    <template v-if="showMeta">
      <div class="meta">
        <span>{{item.share}} mensen delen deze tic</span>
        <button ref="loseFocus">Dit doe ik ook!</button>
      </div>
    </template>

  </div>
</template>

<script>
export default {
  // props: ["item"],
  props: {
    item: {
      type: Object,
      required: true,
    },
    showMeta: {
      type: Boolean,
      required: false,
    },
  },
  name: "TicSingleQuote",
  data() {
    return {};
  }, // End data
  methods: {
    singleTic() {
      this.$router.push({
        path: `/tic/${this.item.id}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.container {
  width: $container;
  margin-left: auto;
  margin-right: auto;
}
.container-blockquote {
  margin-top: $base-margin * 4;
  min-height: 220px;
  max-width: 100%;
  margin-bottom: $base-margin * 2;

  &:hover {
    blockquote {
      background-color: $brand-dark;
      color: $brand-one;
      cursor: pointer;
    }
  }
  blockquote {
    display: inline;
  }
}
// .meta {
//   margin-top: $base-margin * 34;
// }
</style>