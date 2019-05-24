<template>
  <blockquote @click="singleTic">{{item.title}}</blockquote>
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
        path: `/tic/${this.item.id}`
        // path: `/setup/${this.item.type}`
      });
    }
  }
};
</script>

<style lang="scss" scoped>
blockquote {
  min-height: 220px;
  max-width: 100%;
  width: 970px;
}
</style>