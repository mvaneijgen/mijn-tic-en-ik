<template>
  <div class="container-blockquote">
    <blockquote @click="singleTic">{{item.title}}</blockquote>
  </div>
</template>

<script>
export default {
  props: ["item"],
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
.container-blockquote {
  margin-top: $base-margin * 4;
  min-height: 220px;
  max-width: 100%;
  width: 970px;
  margin-left: auto;
  margin-right: auto;
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
</style>