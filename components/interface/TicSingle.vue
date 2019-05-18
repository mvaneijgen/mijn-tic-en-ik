<template>
  <blockquote>{{quote}}</blockquote>
</template>

<script>
export default {
  props: ["quote"],
  name: "TicSingleQuote",
  data() {
    return {};
  } // End data
};
</script>

<style lang="scss" scoped>
blockquote {
  min-height: 220px;
  max-width: 100%;
  width: 970px;
}
</style>